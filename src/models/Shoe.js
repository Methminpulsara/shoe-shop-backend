const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Shoe = sequelize.define('Shoe', {
    name: DataTypes.STRING, 
    description : DataTypes.STRING,
    price : DataTypes.FLOAT,
    image : DataTypes.STRING,
    stock : DataTypes.INTEGER 
});

module.exports = Shoe;