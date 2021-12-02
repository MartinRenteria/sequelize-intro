const {sequelize, DataTypes, Model} = require('./db');

// Creates a Musician Table in our database
class Musician extends Model {

}

// Create attributes (columns) for our model
Musician.init({
	name: DataTypes.STRING, 
	instrument: DataTypes.STRING
}, {
	sequelize, // What database is our table stored in
	timestamps: false,
});

module.exports = { Musician }