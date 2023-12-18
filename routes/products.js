const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../Models/Product.js');

// GET all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// POST a new product
router.post('/', async (req, res, next) => {
  try {
    const post = await Product.create(req.body);
    res.json(post);
  } catch (err) {
    next(err);
  }
});

// GET a product by ID
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findBqqqqqqyId(req.params.productId);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// PUT (Update) a product by ID
router.put('/:productId', async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
    res.json(updatedProduct);
  } catch (err) {
    next(err);
  }
});

// DELETE a product by ID
router.delete('/:productId', async (req, res, next) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
    res.json(deletedProduct);
  } catch (err) {
    next(err);
  }
});

// GET all products sorted by price (high to low)
router.get('/sort/high-to-low', async (req, res, next) => {
  try {
    const products = await Product.find().sort({ price: -1 });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// GET all products sorted by price (low to high)
router.get('/sort/low-to-high', async (req, res, next) => {
  try {
    const products = await Product.find().sort({ price: 1 });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
