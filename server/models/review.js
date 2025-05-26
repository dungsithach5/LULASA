'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Product, {
        foreignKey: 'product_id'
      });
    }
  }
  Review.init({
    product_id: DataTypes.INTEGER,
    rating: DataTypes.TINYINT,
    title: DataTypes.STRING,
    reviewer_name: DataTypes.STRING,
    review_date: DataTypes.DATE,
    review_desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};