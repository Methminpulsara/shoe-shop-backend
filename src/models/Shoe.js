const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Shoe = sequelize.define('Shoe', {
    name: {
        type :DataTypes.STRING,
        allowNull : false,
    },
    description : {
        type :DataTypes.STRING,  
    },
    price : {
        type :DataTypes.FLOAT,
        allowNull :false
    },
    image : DataTypes.STRING,
    stock : DataTypes.INTEGER 
});

module.exports = Shoe;