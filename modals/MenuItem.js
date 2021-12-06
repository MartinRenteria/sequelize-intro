const { sequelize } = require("../db");
const { DataTypes, Model } = require("sequelize");

class MenuItem extends Model {}

MenuItem.init(
  {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    vegetarian: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { MenuItem };
