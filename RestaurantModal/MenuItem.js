const {sequelize, DataTypes, Model} = require('./db');

// Represents a Menu
class MenuItem extends Model {

    // add methods here

}

MenuItem.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false
});

module.exports = {
    MenuItem
};