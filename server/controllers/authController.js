// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const axios = require("axios");
const {
  createUser,
  findUserByGoogleIdDetail,
  findUserByEmail,
} = require("../models/userModel");

// POST login with Google
const googleLogin = async (req, res) => {
  const { credential } = req.body;

  try {
    const response = await axios.get(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`
    );
    const { sub, email, name, picture } = response.data;

    let user = await findUserByGoogleIdDetail(sub);
    if (!user) {
      user = await createUser({
        google_id: sub,
        email,
        name,
        picture,
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({ user });

  } catch (err) {
    console.error('Google login error:', err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

// POST login with Google
const googleLogout = async (req, res) => {
  try {
    ['accessToken', 'userInfo', 'expiresAt'].forEach((cookie) => {
      res.clearCookie(cookie, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      });
    });

    return res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    return res.status(500).json({ message: 'Logout failed', error: error.message });
  }
};

const loginWithEmailPassword = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Email không tồn tại" });
    }

    // ⚠️ Nếu chưa có password trong DB → tạm hardcode để test
    const isMatch = password === '123456'; // Hoặc bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Sai mật khẩu" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Đăng nhập thất bại", error: err.message });
  }
};


module.exports = { googleLogin, googleLogout, loginWithEmailPassword };