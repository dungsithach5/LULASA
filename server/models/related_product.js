'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RelatedProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  RelatedProduct.init({
    product_id: DataTypes.INTEGER,
    related_product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Related_product',
  });
  return RelatedProduct;
};