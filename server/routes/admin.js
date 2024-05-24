const express = require('express');
const adminRouter = express.Router();
const admin = require('../middlewares/admin');
const { Product } = require("../models/product");

//Creating an Admin Middleware

// Add Product

adminRouter.post("/admin/add-product", admin, async (req, res) => {
    try {
      const { name, description, images, quantity, price, category } = req.body;
      let product = new Product({
        name,
        description,
        images,
        quantity,
        price,
        category,
      });
      product = await product.save();
      res.json(product);
    } catch (e) {
      res.status(500).json({ error: e.message});
    }
  });
module.exports = adminRouter;
