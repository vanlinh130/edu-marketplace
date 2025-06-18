const { updateStatusOrderModel } = require("../models/ordersModel");
const { updatePaymentStatus, getAll } = require("../models/paymentsModel");
const verifyMomoSignature = require("../utils/verifyMomoSignature");



const handleMomoCallback = async (req, res) => {
  try {
    const data = req.body;
    const signatureFromMomo = data.signature;

    // Bước 1: Xác minh chữ ký callback từ Momo
    // const isValid = verifyMomoSignature(data, signatureFromMomo);
    // if (!isValid) {
    //   return res.status(400).json({ message: 'Invalid signature' });
    // }

    const { orderId, transId: transaction_id, resultCode } = data;

    // Bước 2: Xử lý kết quả thanh toán
    const paymentStatus = resultCode === 0 ? 'success' : 'failed';
    const orderStatus = resultCode === 0 ? 'paid' : 'failed';

    // Bước 3: Cập nhật vào DB
    await updatePaymentStatus({ order_id: orderId, transaction_id, status: paymentStatus });
    await updateStatusOrderModel(orderId, orderStatus);

    res.status(200).json({ message: 'Payment updated successfully' });
  } catch (error) {
    console.error('Error in Momo callback:', error);
    res.status(500).json({ error: 'Error updating payment' });
  }
};


const getAllPayment = async (req, res) => {
  try {
    const payments = await getAll();
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { handleMomoCallback, getAllPayment };
