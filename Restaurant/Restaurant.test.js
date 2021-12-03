// Imports my db file that stores/holds my data
const {sequelize} = require('./db');
// Imports my info in order to use modal required here
const {Restaurant} = require('./Restaurant');

//Explains my test suite 
describe('Relationships', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })
    
    test('restaurants have names', async () => {
        const restaurant = await Restaurant.create({name: 'Maggianos'})

        expect(restaurant.name).toBe("Maggianos");
    })

    test('restaurants have locations', async () => {
        const restaurant = await Restaurant.create({name: 'Maggianos', location: 'Bellevue WA'})

        expect(restaurant.location).toBe("Bellevue WA");
    })
})