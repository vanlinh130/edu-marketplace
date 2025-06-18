const pool = require("../config/db");

const createPayment = async ({
  order_id,
  payment_method,
  amount,
  qr_code_url,
  qr_code_raw,
}) => {
  const result = await pool.query(
    `INSERT INTO payments (order_id, payment_method, amount, qr_code_url, qr_code_raw, status)
     VALUES ($1, $2, $3, $4, $5, 'pending') RETURNING *`,
    [order_id, payment_method, amount, qr_code_url, qr_code_raw]
  );
  return result.rows[0];
};

const updatePaymentStatus = async ({ order_id, transaction_id, status }) => {
  await pool.query(
    `UPDATE payments 
     SET transaction_id = $1, status = $2, updated_at = NOW()
     WHERE order_id = $3`,
    [transaction_id, status, order_id]
  );
};

const getAll = async () => {
  const result = await pool.query(
    `SELECT * FROM payments ORDER BY created_at DESC`
  );
  return result.rows;
};

module.exports = { createPayment, updatePaymentStatus, getAll };
