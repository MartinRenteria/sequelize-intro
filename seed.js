const { sequelize } = require("./db");
const { Restaurant, Menu, MenuItem } = require("./modals/index");

const seedRestaurant = [
  {
    name: "AppleBees",
    location: "Texas",
    cuisine: "FastFood",
  },
  {
    name: "LittleSheep",
    location: "Dallas",
    cuisine: "Hotpot",
  },
  {
    name: "Spice Grill",
    location: "Houston",
    cuisine: "Indian",
  },
  {
    name: "burgetking",
    location: "Dallas",
    cuisine: "Hotpot",
  },
  {
    name: "MCDS",
    location: "Dallas",
    cuisine: "Hotpot",
  },
];

const seedMenu = [
  {
    title: "Breakfast",
    RestaurantId: 1,
  },
  {
    title: "Lunch",
    RestaurantId: 2,
  },
  {
    title: "Dinner",
    RestaurantId: 3,
  },
];

const seedMenuItem = [
  {
    name: "bhindi masala",
    image: "someimage.jpg",
    price: 9.5,
    vegetarian: true,
    MenuId: 3,
  },
  {
    name: "egusi soup",
    image: "someimage.jpg",
    price: 10.5,
    vegetarian: false,
    MenuId: 2,
  },
  {
    name: "hamburger",
    image: "someimage.jpg",
    price: 6.5,
    vegetarian: false,
    MenuId: 1,
  },
];

const seed = async () => {
  try {
    await sequelize.sync({ force: true });
    await Restaurant.bulkCreate(seedRestaurant, { validate: true });
    await Menu.bulkCreate(seedMenu, { validate: true });
    await MenuItem.bulkCreate(seedMenuItem, { validate: true });
    console.log("Seeding success!");
    sequelize.close();
  } catch (error) {
    console.log("SOMETHING WENT WRONG WITH THE SEEDING: ", error);
  }
};

seed()
  .then(() => {
    console.log("Seeding success!");
  })
  .catch((err) => {
    console.error("Oh noes! Something went wrong!");
    console.error(err);
  });
