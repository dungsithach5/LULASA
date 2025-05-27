const express = require('express');
const router = express.Router();

const {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview,
} = require('../controllers/review.controller');

router
    .route('/')
    .get(getAllReviews)
    .post(createReview);

router
    .route('/:id')
    .get(getReviewById)
    .put(updateReview)
    .delete(deleteReview);

module.exports = router;