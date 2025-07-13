const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Shoe = require("./Shoe");
const Order = require("./Order");

const OrderDetail = sequelize.define("OrderDetail", {
  quantity: DataTypes.INTEGER,
  price: DataTypes.FLOAT,
  subTotal: DataTypes.FLOAT,
});


OrderDetail.belongsTo(Order);
Order.hasMany(OrderDetail);

OrderDetail.belongsTo(Shoe)
Shoe.hasMany(OrderDetail);

module.exports = OrderDetail;