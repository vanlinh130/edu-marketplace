const express = require("express");
const { googleLogin, googleLogout, loginWithEmailPassword } = require("../controllers/authController");

const router = express.Router();
router.post("/google-login", googleLogin);
router.post('/logout', googleLogout);
router.post('/login', loginWithEmailPassword);


module.exports = router;