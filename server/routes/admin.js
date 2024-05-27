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

// ADMIN GET ALL THE PRODUCT
// admin/get-products

adminRouter.get("/admin/get-products" , admin , async(req, res)=> {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (e) {
    res.json(550).json({error: e.message});
    
  }
});

//delte the product

adminRouter.post("/admin/delete-product" , admin , async(req, res)=> {
  try{
       const {id} = req.body;
       let product = await Product.findByIdAndDelete(id);
       //product = await product.save();
       res.json(product);
      // res.send("All went well!");
  }
  catch(e){
    res.json(500).json({error: e.message});
  }
})


module.exports = adminRouter;
