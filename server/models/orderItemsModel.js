const pool = require("../config/db");

const create = async ({ order_id, product_id, quantity, price }) => {
  const result = await pool.query(
    `INSERT INTO order_items (order_id, product_id, quantity, price)
       VALUES ($1, $2, $3, $4) RETURNING *`,
    [order_id, product_id, quantity, price]
  );
  return result.rows[0];
};

const getByOrderId = async (order_id) => {
  const result = await pool.query(
    `SELECT oi.*, p.title, p.thumbnail_url
       FROM order_items oi
       JOIN products p ON oi.product_id = p.id
       WHERE oi.order_id = $1`,
    [order_id]
  );
  return result.rows;
};

const deleteById = async (id) => {
  const result = await pool.query(
    `DELETE FROM order_items WHERE id = $1 RETURNING *`,
    [id]
  );
  return result.rows[0];
};

module.exports = {
  create,
  getByOrderId,
  deleteById,
};
