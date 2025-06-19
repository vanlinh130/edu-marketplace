const express = require("express");
const { handleMomoCallback, getAllPayment } = require("../controllers/paymentController");
const { createTransactionSepay } = require("../controllers/transactionController");
const router = express.Router();

router.post('/momo-callback', handleMomoCallback);
router.post('/sepay-callback', createTransactionSepay);
router.get('/', getAllPayment);

module.exports = router;