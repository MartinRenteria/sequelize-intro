const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  dialect: "sqlite", //What database we are using
  storage: "./RestaurantModal/restaurant.sqlite", //Where file is where we are going to store the information
});

module.exports = { sequelize, DataTypes, Model };
