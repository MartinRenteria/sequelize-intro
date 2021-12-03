const {sequelize} = require("./db");
const {Musician, Band} = require("./associations")

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

	test('Bands can have many musicians', async () => {
// Creates a test instance of Musician 
		const TDG = await Band.create({name : 'TDG', genre : 'Rock'})
// Creates 3 instances of Musician
		const Adam = await Musician.create({name : 'Adam', instrument : 'vocals'});
		const Neil = await Musician.create({name : 'Neil', instrument : 'drummer' });
		const Brad = await Musician.create({name : 'Brad', instrument : 'bassist'});
//Add test musicians to test band
		await TDG.addMusician(Adam)
		await TDG.addMusician(Neil)
		await TDG.addMusician(Brad)
// Retrieves list of musicians in this band
		const musicians = await TDG.getMusicians() 
// Assert that the 0th instance is indeed an instance, which should return true
		expect(musicians.length).toBe(3)
		expect(musicians[0] instanceof Musician).toBeTruthy

	})
})