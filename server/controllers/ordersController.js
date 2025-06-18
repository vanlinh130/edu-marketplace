const { create, getAll, updateStatus, Delete, getById } = require("../models/ordersModel");

const createOrder = async (req, res) => {
  try {
    const { user_id, email, total_amount, status } = req.body;
    const newOrder = await create({ user_id, email, total_amount, status });
    res.json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
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
    const updated = await updateStatus(
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
