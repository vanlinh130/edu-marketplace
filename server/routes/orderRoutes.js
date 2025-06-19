const express = require("express");
const { getAllOrders, getOrderById, updateStatusOrder, deleteOrder, createOrders } = require("../controllers/ordersController");
const router = express.Router();

router.post("/", createOrders);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.patch("/:id/status", updateStatusOrder);
router.delete("/:id", deleteOrder);

module.exports = router;