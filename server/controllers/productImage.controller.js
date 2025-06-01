const { Product_images }= require('../models');
exports.getAllProductImages = async (req, res) => {
    try {
        const products = await Product_images.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

exports.getProductImageById = async (req, res) => {
    try {
        const productimage = await Product_images.findByPk(req.params.id);
        if (!productimage) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(productimage);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
};

exports.createProductImage = async (req, res) => {
    try {
        const newProductimage = await Product_images.create({
            product_id: req.body.product_id,
            url: req.body.url,
        });
        res.status(201).json(newProductimage);
    } catch (error) {
        res.status(400).json({ message: 'Error creating product', error });
    }
};

exports.updateProductImage = async (req, res) => {
    try {
        const [updatedRows] = await Product_images.update(req.body, {
            where: { id: req.params.id }
        });

        if (updatedRows === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const updatedProductimage = await Product_images.findByPk(req.params.id);
        res.status(200).json(updatedProductimage);
    } catch (error) {
        res.status(400).json({ message: 'Error updating product', error });
    }
};

exports.deleteProductImage = async (req, res) => {
    try {
        const deletedRows = await Product_images.destroy({
            where: { id: req.params.id }
        });

        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};