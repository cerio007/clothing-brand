const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const upload = require('../config/cloudinary'); 
const {createProduct, getProducts, getProduct} = require('../controllers/productController');

// GET all products
router.get(`/`, getProducts);
router.get(`/:id`, getProduct);

// Create a new product
router.post('/add', protect, adminOnly, upload.single('image'), createProduct);

module.exports = router;