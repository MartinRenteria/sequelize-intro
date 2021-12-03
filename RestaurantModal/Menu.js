const {sequelize, DataTypes, Model} = require('./db');
const {MenuItem} = require('./MenuItem')

// Represents a Menu
class Menu extends Model {

    // add methods here

}

Menu.init({
    name: DataTypes.STRING}, {
    sequelize,
    timestamps: false
});

Menu.hasMany(MenuItem, {foreignKey: 'menu_id'});
MenuItem.belongsTo(Menu, {foreignKey: 'menu_id'});

module.exports = {Menu};