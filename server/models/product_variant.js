'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_variant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product_variant.belongsTo(models.Product, {
        foreignKey: 'product_id'
      });
    }
  }
  Product_variant.init({
    product_id: DataTypes.INTEGER,
    stock_quantity: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product_variant',
  });
  return Product_variant;
};