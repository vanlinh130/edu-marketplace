const pool = require("../config/db");

const createTransaction = async (transactionData) => {
  const {
    gateway,
    transaction_date,
    account_number,
    sub_account,
    amount_in,
    amount_out,
    accumulated,
    code,
    transaction_content,
    reference_number,
    body
  } = transactionData;

  const query = `
    INSERT INTO tb_transactions (
      gateway, transaction_date, account_number, sub_account,
      amount_in, amount_out, accumulated, code,
      transaction_content, reference_number, body
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *;
  `;

  const values = [
    gateway,
    transaction_date || null, // NULL nếu không có giá trị
    account_number,
    sub_account,
    amount_in,
    amount_out,
    accumulated,
    code,
    transaction_content,
    reference_number,
    body
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = {
  createTransaction,
};