const {sequelize, DataTypes, Model} = require('./db');

// Create a Band Table
class Band extends Model {}


// Create attributes for band model
Band.init({
	name : DataTypes.STRING,
	genre: DataTypes.ENUM('Rock', 'Pop', 'Hip Hop', 'R&B'),
    albulms: DataTypes.INTEGER
}, {
	sequelize
})


module.exports = { Band }