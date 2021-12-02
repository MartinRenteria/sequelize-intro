const {sequelize} = require("./db");
const {Musician} = require("./index")

describe('Musician Database', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create a musician', async() => {
		const testMusician = await Musician.create({name : 'Prince'})
		expect(testMusician.name).toBe('Prince')
	})

})