const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Shoe = sequelize.define('Shoe', {
    name: {
        type :DataTypes.STRING,
        allowNull : false,
    },
    type: {
        type :DataTypes.ENUM('men', 'women','limited'),
        allowNull : false,
        }
    ,
    description : {
        type :DataTypes.STRING,  
    },
    price : {
        type :DataTypes.FLOAT,
        allowNull :false
    },
    image : DataTypes.STRING,
    stock : {
        type :DataTypes.INTEGER,
        defaultValue : 0, 
    },
    status : {
        type :DataTypes.ENUM('active', 'inactive', 'deleted'),
        defaultValue :'active'
    },
}, {
    timestamps : true,
    }
);
module.exports = Shoe;