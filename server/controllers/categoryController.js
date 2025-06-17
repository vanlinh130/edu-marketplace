const slugify = require("slugify");
const { create, getAll, getById, update, Delete } = require("../models/categoryMode");

const getAllCategories = async (req, res) => {
  try {
    const categories = await getAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getCategoryById = async (req, res) => {
  try {
    const category = await getById(req.params.id);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const slug = slugify(name, { lower: true, strict: true, locale: "vi" });
    const newCategory = await create(name, slug);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const slug = slugify(name, { lower: true, strict: true, locale: "vi" });
    const updatedCategory = await update(req.params.id, name, slug);
    res.json(updatedCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    await Delete(req.params.id);
    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory
};
