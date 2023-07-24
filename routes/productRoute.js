const express = require("express");

const router = express.Router();
const Product = require("../models/productModel.js");
const {
  getProducts,
  getProductById,
  addProduct,
  updatingProduct,
  deletingProduct,
} = require("../controllers/productController.js");

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", addProduct);

router.put("/:id", updatingProduct);

router.delete("/:id", deletingProduct);

module.exports = router;
