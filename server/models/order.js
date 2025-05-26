'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.hasMany(models.Order_item, {
        foreignKey: 'order_id'
      });
    }
  }
  Order.init({
    customer_name: DataTypes.STRING,
    customer_phone: DataTypes.STRING,
    customer_address: DataTypes.STRING,
    customer_email: DataTypes.STRING,
    order_date: DataTypes.DATE,
    total_amt: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};