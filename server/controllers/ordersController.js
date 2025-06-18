const pool = require("../config/db");
// const generateQRCode = require("../utils/generateQRCode");
const { createOrderItemModel } = require("../models/orderItemsModel");
const { createOrderModel, getAll, updateStatusOrderModel, Delete, getById } = require("../models/ordersModel");
const { createPayment } = require("../models/paymentsModel");
const createMomoPayment = require("../utils/momoPayment");

const createOrder = async (req, res) => {
  const { user_id, email, items, total_amount, payment_method  } = req.body;
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'items is required and must be an array' });
  }

  try {
    const client = await pool.connect();
    await client.query("BEGIN");

    const orderId = await createOrderModel({ user_id, email, total_amount });

     for (const item of items) {
      await createOrderItemModel({
        order_id: orderId.id,
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price,
      });
    }

    const momoRes = await createMomoPayment(orderId.id, total_amount, `Thanh toán đơn hàng ${orderId.id}`);

    const qrCodeUrl = momoRes.payUrl;

    await createPayment({
      order_id: orderId.id,
      payment_method,
      amount: total_amount,
      qr_code_url: qrCodeUrl,
      qr_code_raw: JSON.stringify(momoRes),
    });

    await client.query("COMMIT");
    client.release();

    res.status(201).json({
      orderId,
      total_amount,
      qrCodeUrl,
      message: 'Order created successfully, scan QR to pay',
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Error creating order' });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await getById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await getAll();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateStatusOrder = async (req, res) => {
  try {
    const updated = await updateStatusOrderModel(
      req.params.id,
      req.body.status
    );
    if (!updated) return res.status(404).json({ message: "Order not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const deleted = await Delete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Order not found" });
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createOrder,
  getOrderById,
  getAllOrders,
  updateStatusOrder,
  deleteOrder,
};
