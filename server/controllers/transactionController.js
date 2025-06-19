const pool = require("../config/db");

const createTransactionSepay = async (req, res) => {
  try {
    const apiKey = req.headers.authorization?.replace('Apikey ', '');
    const expectedApiKey = process.env.SEPAY_API_KEY || 'YOUR_SEPAY_API_KEY';

    if (!apiKey || apiKey !== expectedApiKey) {
      return res.status(401).json({ success: false, message: 'Unauthorized - Invalid API key' });
    }

    const {
      id,
      gateway,
      transactionDate,
      accountNumber,
      content,
      transferType,
      transferAmount,
      accumulated,
      subAccount,
      referenceCode,
      description,
    } = req.body;

    console.log('SePay Callback received:', req.body);

    // 👉 Tìm orderId từ content (vì code = null)
    let orderId = null;

    const match = content?.match(/[0-9a-f]{32}/i);
    if (match) {
      const raw = match[0];
      orderId = `${raw.slice(0,8)}-${raw.slice(8,12)}-${raw.slice(12,16)}-${raw.slice(16,20)}-${raw.slice(20)}`;
      console.log('Extracted orderId:', orderId);
    }

    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      // 👉 Insert transaction với orderId vào trường code
      const insertQuery = `
        INSERT INTO tb_transactions 
        (gateway, transaction_date, account_number, code, content, transfer_type, transfer_amount, accumulated, sub_account, reference_code, description)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
      `;

      await client.query(insertQuery, [
        gateway,
        transactionDate,
        accountNumber,
        orderId,           // <----- Gán orderId vào code
        content,
        transferType,
        transferAmount,
        accumulated,
        subAccount,
        referenceCode,
        description,
      ]);

      // 👉 Nếu tìm thấy orderId → cập nhật đơn hàng
      if (orderId) {
        const findOrderQuery = 'SELECT * FROM orders WHERE id = $1 LIMIT 1';
        const orderResult = await client.query(findOrderQuery, [orderId]);

        if (orderResult.rows.length > 0) {
          const order = orderResult.rows[0];

          if (Number(transferAmount) >= Number(order.total_amount)) {
            const updateOrderQuery = `
              UPDATE orders 
              SET status = 'completed', updated_at = NOW()
              WHERE id = $1
            `;
            await client.query(updateOrderQuery, [orderId]);
            console.log('Order updated to completed:', orderId);
          } else {
            console.log('Transfer amount insufficient for order:', orderId);
          }
        } else {
          console.log('Order not found:', orderId);
        }
      }

      await client.query('COMMIT');
      return res.status(200).json({ success: true, message: 'Transaction saved successfully' });
    } catch (err) {
      await client.query('ROLLBACK');
      console.error('Error during transaction:', err);
      return res.status(500).json({ success: false, message: 'Transaction failed', error: err.message });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error in sepayCallback:', error);
    return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
};


module.exports = {
  createTransactionSepay,
};
