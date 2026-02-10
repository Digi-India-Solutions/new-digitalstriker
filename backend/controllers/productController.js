const mongoose = require("mongoose");
const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    const { name, des, img, category } = req.body;
    if (!name || !img || !category) {
      return res.status(400).json({
        success: false,
        message: "Name, image URL and category are required.",
      });
    }
    const product = await Product.create({ name, des: des || "", img, category });
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getallproduct = async (req, res) => {
  try {
    const data = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const isValidId = (id) => {
  if (!id || typeof id !== "string") return false;
  if (id.length !== 24) return false;
  return /^[a-fA-F0-9]+$/.test(id) && mongoose.Types.ObjectId.isValid(id);
};

const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ success: false, message: "Invalid product ID." });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found." });
    }
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ success: false, message: "Invalid product ID." });
    }
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found." });
    }
    res.status(200).json({ success: true, message: "Product deleted." });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  createProduct,
  getallproduct,
  singleProduct,
  deleteProduct,
};
