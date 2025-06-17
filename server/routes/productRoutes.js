const express = require("express");
const { createProduct, getAllProduct, getByIdProduct, getBySlugProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const router = express.Router();

router.post('/', createProduct);
router.get("/", getAllProduct);
router.get("/:id", getByIdProduct);
router.get("/slug/:slug", getBySlugProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;