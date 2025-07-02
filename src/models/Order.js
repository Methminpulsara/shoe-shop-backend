const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const User = require('./User')

const Order = sequelize.define('Order', {

    totalPrice: DataTypes.FLOAT,
});


Order.belongsTo(User);
User.hasMany(Order)

module.exports = Order ;