const pool = require("../config/db");

const create = async (data) => {
  const {
    title,
    slug,
    description,
    price,
    discount_price,
    thumbnail_url,
    images,
    category_id,
    tags,
    type,
    author,
    download_link,
    preview_url,
    is_free,
    is_featured,
  } = data;

  const result = await pool.query(
    `INSERT INTO products (
        title, slug, description, price, discount_price,
        thumbnail_url, images, category_id, tags, type,
        author, download_link, preview_url, is_free, is_featured
      ) VALUES (
        $1, $2, $3, $4, $5,
        $6, $7, $8, $9, $10,
        $11, $12, $13, $14, $15
      ) RETURNING *`,
    [
      title,
      slug,
      description,
      price,
      discount_price,
      thumbnail_url,
      images,
      category_id,
      tags,
      type,
      author,
      download_link,
      preview_url,
      is_free,
      is_featured,
    ]
  );
  return result.rows[0];
};

const getAll = async (limit = 10, offset = 0) => {
  const result = await pool.query(
    "SELECT * FROM products ORDER BY created_at DESC LIMIT $1 OFFSET $2",
    [limit, offset]
  );
  return result.rows;
};

const getTotalCount = async () => {
  const result = await pool.query("SELECT COUNT(*) FROM products");
  return parseInt(result.rows[0].count, 10);
};

const getById = async (id) => {
  const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
  return result.rows[0];
};

const getBySlug = async (slug) => {
  const result = await pool.query("SELECT * FROM products WHERE slug = $1", [
    slug,
  ]);
  return result.rows[0];
};

const update = async (id, data) => {
  const fields = [];
  const values = [];
  let index = 1;

  for (const key in data) {
    fields.push(`${key} = $${index}`);
    values.push(data[key]);
    index++;
  }
  values.push(id);

  const result = await pool.query(
    `UPDATE products SET ${fields.join(
      ", "
    )}, updated_at = NOW() WHERE id = $${index} RETURNING *`,
    values
  );
  return result.rows[0];
};

const Delete = async (id) => {
  const result = await pool.query(
    "DELETE FROM products WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};

module.exports = {
  create,
  getAll,
  getTotalCount,
  getById,
  getBySlug,
  update,
  Delete,
};
