const express = require('express');
const router = express.Router();

const {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} = require('../controllers/category.controller');

router
    .route('/')
    .get(getAllCategories)
    .post(getCategoryById);

router
    .route('/:id')
    .get(createCategory)
    .put(updateCategory)
    .delete(deleteCategory);


module.exports = router;