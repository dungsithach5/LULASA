'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductVariant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductVariant.belongsTo(models.Product, {
        foreignKey: 'product_id'
      });
    }
  }
  ProductVariant.init({
    product_id: DataTypes.INTEGER,
    stock_quantity: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductVariant',
  });
  return ProductVariant;
};