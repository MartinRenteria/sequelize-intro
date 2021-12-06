// Tells sequelize that I want these tools/props within my datavase
const {sequelize, DataTypes, Model} = require('./RestaurantModal/db');
const {Menu} = require('./RestaurantModal/Menu')


// Restaurant table for database
class Restaurant extends Model {

// Able to add additional methods for table

}

//Creates columns for my table and thier desired datatypes
Restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
}, {

    sequelize, // Database 
    timestamps: false, // Avoids a creted_at column from appearing 
});

Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})

// Delievers this model to my test suites in my test file
module.exports = {
    Restaurant
};