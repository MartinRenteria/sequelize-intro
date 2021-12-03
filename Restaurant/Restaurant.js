// Tells sequelize that I want these tools/props within my datavase
const {sequelize, DataTypes, Model} = require('./db');

// Restaurant table for database
class Restaurant extends Model {

// Able to add additional methods for table

}

//Creates rows for my table and thier desired datatypes
Restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
}, {

    sequelize, // Database 
    timestamps: false, // ??????
});

// Delievers this model to my test suites in my test file
module.exports = {
    Restaurant
};