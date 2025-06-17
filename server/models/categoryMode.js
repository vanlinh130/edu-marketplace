const pool = require("../config/db");

const getAll = async () => {
  const result = await pool.query(
    "SELECT * FROM categories ORDER BY created_at ASC"
  );
  return result.rows;
};

const getById = async (id) => {
  const result = await pool.query("SELECT * FROM categories WHERE id = $1", [
    id,
  ]);
  return result.rows[0];
};

const create = async (name, slug) => {
  const result = await pool.query(
    "INSERT INTO categories (name, slug) VALUES ($1, $2) RETURNING *",
    [name, slug]
  );
  return result.rows[0];
};

const update = async (id, name, slug) => {
  const result = await pool.query(
    "UPDATE categories SET name = $1, slug = $2, updated_at = NOW() WHERE id = $3 RETURNING *",
    [name, slug, id]
  );
  return result.rows[0];
};

const Delete = async (id) => {
  await pool.query("DELETE FROM categories WHERE id = $1", [id]);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  Delete,
};
