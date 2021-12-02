const {sequelize} = require("./db");
const {Musician} = require("./musician")

describe('Musician Database', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create a musician', async() => {
		const testMusician = await Musician.create({name : 'Prince', age : 57, instrument : 'Guitar'})
		expect(testMusician.name).toBe('Prince')
	})

	test(`can create a musician's age`, async() => {
		const testMusician = await Musician.create({name : 'Ozzy Osbourne', age : 72, instrument : 'Guitar'})
		expect(testMusician.age).toBe(72)
	})

	test('musicians can play an instrument', async () => {
		const testMusician = await Musician.create({name: 'Adam Gontier', instrument : "Guitar"});
		expect(testMusician.instrument).toBe('Guitar');
	})

})