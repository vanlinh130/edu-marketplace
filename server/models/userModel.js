const pool = require('../config/db');

// Get user by google_id
const findUserByGoogleIdDetail = async (googleId) => {
  const res = await pool.query('SELECT * FROM users WHERE google_id = $1', [googleId]);
  return res.rows[0];
};

const createUser = async (user) => {
  const { google_id, email, name, picture } = user;
  const res = await pool.query(
    'INSERT INTO users (google_id, email, name, picture) VALUES ($1, $2, $3, $4) RETURNING *',
    [google_id, email, name, picture]
  );
  return res.rows[0];
};

// Tìm user theo email
const findUserByEmail = async (email) => {
  const res = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return res.rows[0];
};

const getAllUsers = async () => {
  const query = 'SELECT * FROM users ORDER BY created_at DESC';
  const result = await pool.query(query);
  return result.rows;
};

module.exports = {
  createUser,
  findUserByGoogleIdDetail,
  findUserByEmail,
  getAllUsers
};