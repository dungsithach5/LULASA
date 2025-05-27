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
    static associate(models) {
      RelatedProduct.belongsTo(models.Product, {
        foreignKey: 'product_id'
      });
    }
  }
  RelatedProduct.init({
    product_id: DataTypes.INTEGER,
    related_product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RelatedProduct',
  });
  return RelatedProduct;
};