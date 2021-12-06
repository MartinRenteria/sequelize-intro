const { sequelize } = require("../db");
const { Restaurant } = require("./Restaurant");
const { Menu } = require("./Menu");
const { MenuItem } = require("./MenuItem");

Menu.belongsTo(Restaurant);
Restaurant.hasMany(Menu);

MenuItem.belongsTo(Menu);
Menu.hasMany(MenuItem);

module.exports = { Restaurant, Menu, MenuItem };
