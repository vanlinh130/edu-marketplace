const express = require("express");
const { createOrder, getAllOrders, getOrderById, updateStatusOrder, deleteOrder } = require("../controllers/ordersController");
const router = express.Router();

router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.patch("/:id/status", updateStatusOrder);
router.delete("/:id", deleteOrder);

module.exports = router;