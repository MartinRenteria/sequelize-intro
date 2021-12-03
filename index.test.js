const {sequelize} = require("./db");
const {Musician} = require("./musician")
const {Band} = require("./band")

describe('Musician Database', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})
// Musician test suites
	test('can create a musician', async() => {
		const testMusician = await Musician.create({name : 'Prince', instrument : 'Guitar'})
		expect(testMusician.name).toBe('Prince')
	})

	test('can create an instrument', async() => {
		const testMusician = await Musician.create({name : 'Prince', instrument : 'Guitar'})
		expect(testMusician.name).toBe('Prince')
	})

// Band test suites
	test('can create a band', async () => {
		const testBand = await Band.create({name : 'Saint Asonia'})
		expect(testBand.name).toBe('Saint Asonia')
	})

	test('can create a band genre', async () => {
		const testBand = await Band.create({name : 'Saint Asonia', genre : "Rock"})
		expect(testBand.genre).toBe('Rock')
	})

	test('can create how many albulms bands have', async () => {
		const testBand = await Band.create({name : 'Saint Asonia', genre : "Rock", albulms : 3})
		expect(testBand.albulms).toBe(3)
	})
})