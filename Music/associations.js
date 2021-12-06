const {sequelize, DataTypes, Model} = require('./db');

const { Musician } = require('./Musician');
const { Band } = require('./Band');


//Create an Association!
Musician.belongsTo(Band) //adds a foreign key on the musician table, creating a musician instance for the band they belong to
Band.hasMany(Musician) //gives us Sequelize methods for a one to many relationships

module.exports = { Musician, Band }; // Export our models with the associations added!