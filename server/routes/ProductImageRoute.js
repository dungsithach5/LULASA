const express = require('express');
const router = express.Router();

const {
    getAllProductImages,
    getProductImageById,
    createProductImage,
    updateProductImage,
    deleteProductImage,
} = require('../controllers/productImage.controller');

router
    .route('/')
    .get(getAllProductImages)
    .post(createProductImage);

router
    .route('/:id')
    .get(getProductImageById)
    .put(updateProductImage)
    .delete(deleteProductImage);


module.exports = router;