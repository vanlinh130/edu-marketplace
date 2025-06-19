const express = require("express");
const { handleMomoCallback, getAllPayment } = require("../controllers/paymentController");
const router = express.Router();

router.post('/momo-callback', handleMomoCallback);
router.post('/sepay-callback', handleMomoCallback);
router.get('/', getAllPayment);

module.exports = router;