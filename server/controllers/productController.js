const slugify = require("slugify");
const { create, getAll, getTotalCount, getById, getBySlug, update, Delete } = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    const slug = slugify(title, { lower: true, strict: true, locale: "vi" });
    const product = await create({ ...req.body, slug });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;

    const [products, total] = await Promise.all([
      getAll(limit, offset),
      getTotalCount(),
    ]);

    res.json({
      total,
      limit,
      offset,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getByIdProduct = async (req, res) => {
  try {
    const product = await getById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBySlugProduct = async (req, res) => {
  try {
    const product = await getBySlug(req.params.slug);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const existingProduct = await getById(id);
    if (!existingProduct) return res.status(404).json({ error: "Product not found" });
    const data = { ...req.body };

    if (data.title) {
      data.slug = slugify(data.title, { lower: true, strict: true });
    }

    const product = await update(id, data);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Delete(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getByIdProduct,
  getBySlugProduct,
  updateProduct,
  deleteProduct,
};
