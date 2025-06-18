const { createOrderItemModel, getByOrderId, deleteById } = require("../models/orderItemsModel");

const createOrderItem = async (req, res) => {
  try {
    const { order_id, product_id, quantity, price } = req.body;
    const newItem = await createOrderItemModel({
      order_id,
      product_id,
      quantity,
      price,
    });
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getOrderItems = async (req, res) => {
  try {
    const items = await getByOrderId(req.params.order_id);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteOrderItem = async (req, res) => {
  try {
    const deleted = await deleteById(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Order item not found" });
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createOrderItem,
  getOrderItems,
  deleteOrderItem,
};
