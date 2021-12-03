// Imports my db file that stores/holds my data
const {sequelize} = require('./db');
// Imports model info in order to use modal required here
const {Restaurant} = require('./Restaurant');
const {Menu} = require('./Menu');
const {MenuItem} = require('./MenuItem')

//Explains my test suite 
describe('Relationships', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })

// Test suites for Restaurant 
    test('restaurants have names', async () => {
        const restaurant = await Restaurant.create({name: 'Maggianos'})

        expect(restaurant.name).toBe("Maggianos");
    })

    test('restaurants have locations', async () => {
        const restaurant = await Restaurant.create({name: 'Maggianos', location: 'Bellevue WA'})

        expect(restaurant.location).toBe("Bellevue WA");
    })

// Test suites for Menu
test('Menus have names', async () => {
    const menu = await Menu.create({name: 'Breakfast'})

    expect(menu.name).toBe("Breakfast");
})

// Test suites for Menu-item
test('Menu Items have names', async () => {
    const menuItem = await MenuItem.create({name: 'Meatballs', price : 11.99})

    expect(menuItem.name).toBe('Meatballs');
})

test('Menu Items have a price', async () => {
    const menuItem = await MenuItem.create({name: 'Spaghetti', price: 10.99})

    expect(menuItem.price).toBe(10.99);
})

//Associations suites

    test('restaurants have menus', async () => {
        const restaurant = await Restaurant.create({name: 'Maggianos', location: 'Bellevue WA'})
        const menu = await Menu.create({name: 'Breakfast'});
        await restaurant.addMenu(menu);

        const menus = await restaurant.getMenus();
        const menuItem = await MenuItem.create({name: 'Pasta', price: 10.00});
        await menus[0].addMenuItem(menuItem);
        const menuItems = await menus[0].getMenuItems();

        expect(menus[0].name).toBe('Breakfast');
        expect(menuItems.length).toBe(1);
    })

})