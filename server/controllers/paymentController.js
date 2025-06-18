const { updateStatusOrderModel } = require("../models/ordersModel");
const { updatePaymentStatus, getAll } = require("../models/paymentsModel");



const handleMomoCallback = async (req, res) => {
  try {
    const { orderId, transaction_id, status } = req.body;

    const paymentStatus = status || 'success'; // fallback nếu không có status
    const orderStatus = status || 'paid';      // bạn có thể map khác tùy logic

    await updatePaymentStatus({ order_id: orderId, transaction_id, status: paymentStatus });
    await updateStatusOrderModel(orderId, orderStatus);

    res.status(200).json({ message: 'Payment updated successfully' });
  } catch (error) {
    console.error(error);
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
