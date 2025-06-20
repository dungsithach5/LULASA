'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: 'category_id'
      });

      Product.hasMany(models.Review, {
        foreignKey: 'product_id'
      });

      Product.hasMany(models.Product_images, {
        foreignKey: 'product_id'
      });

      Product.hasMany(models.ProductVariant, {
        foreignKey: 'product_id'
      });

      Product.hasMany(models.OrderItem, {
        foreignKey: 'product_id'
      });

      Product.hasMany(models.RelatedProduct, {
        foreignKey: 'product_id'
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    short_desc: DataTypes.STRING,
    cart_desc: DataTypes.STRING,
    long_desc: DataTypes.TEXT,
    ingredients: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    main_image_url: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    imported_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};