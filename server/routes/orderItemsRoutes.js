const express = require("express");
const { createOrderItem, getOrderItems } = require("../controllers/orderItemsController");
const router = express.Router();

router.post("/", createOrderItem);
router.get("/:order_id", getOrderItems);

module.exports = router;