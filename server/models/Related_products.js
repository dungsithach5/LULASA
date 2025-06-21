'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Related_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Related_products.belongsTo(models.Product, {
        foreignKey: 'product_id'
      });
      Related_products.belongsTo(models.Product, {
        foreignKey: 'related_product_id',
      });
    }
  }
  Related_products.init({
    product_id: DataTypes.INTEGER,
    related_product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Related_products',
  });
  return Related_products;
};