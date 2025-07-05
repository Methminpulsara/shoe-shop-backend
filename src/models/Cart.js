 const {DataTypes}= require ('sequelize')
 const sequelize = require('../config/db')


 const User = require('./User')
const Shoe  = require ('./Shoe')

const Cart = sequelize.define ("Cart", {

    quantity :{
        type : DataTypes.INTEGER,
        defaultValue: 1,   
    },

    status : {
        type : DataTypes.ENUM('active', 'inactive' , "removed"),
        defaultValue : 'active',
    }
})

Cart.belongsTo(User);
User.hasMany(Cart);

Cart.belongsTo(Shoe);
Shoe.hasMany(Cart)

module.exports = Cart;