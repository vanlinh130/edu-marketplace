const pool = require("../config/db");

const create = async ({ user_id, email, total_amount, status = "pending" }) => {
  const result = await pool.query(
    `INSERT INTO orders (user_id, email, total_amount, status) 
       VALUES ($1, $2, $3, $4) RETURNING *`,
    [user_id, email, total_amount, status]
  );
  return result.rows[0];
};

const getById = async (id) => {
  const result = await pool.query(`SELECT * FROM orders WHERE id = $1`, [id]);
  return result.rows[0];
};

const getAll = async () => {
  const result = await pool.query(
    `SELECT * FROM orders ORDER BY created_at DESC`
  );
  return result.rows;
};

const updateStatus = async (id, status) => {
  const result = await pool.query(
    `UPDATE orders SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING *`,
    [status, id]
  );
  return result.rows[0];
};

const Delete = async (id) => {
  const result = await pool.query(
    `DELETE FROM orders WHERE id = $1 RETURNING *`,
    [id]
  );
  return result.rows[0];
};

module.exports = {
  create,
  getById,
  getAll,
  updateStatus,
  Delete,
};
