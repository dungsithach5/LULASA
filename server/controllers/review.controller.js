const { Review }= require('../models');
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
};

exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findByPk(req.params.id);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching review', error });
    }
};

exports.createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        res.status(201).json(newReview);
    } catch (error) {
        res.status(400).json({ message: 'Error creating review', error });
    }
};

exports.updateReview = async (req, res) => {
    try {
        const [updatedRows] = await Review.update(req.body, {
            where: { id: req.params.id }
        });

        if (updatedRows === 0) {
            return res.status(404).json({ message: 'Review not found' });
        }

        const updatedReview = await Review.findByPk(req.params.id);
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(400).json({ message: 'Error updating review', error });
    }
};

exports.deleteReview = async (req, res) => {
    try {
        const deletedRows = await Review.destroy({
            where: { id: req.params.id }
        });

        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting review', error });
    }
};