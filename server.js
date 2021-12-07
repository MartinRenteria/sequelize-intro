const express = require("express");
const app = express();
const port = 3000;
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const { Restaurant, Menu, MenuItem } = require("./modals/index");
const { Musician, Band } = require("./Music/associations");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Configures handlebars library to work well w/ Express + Sequelize model
const handlebars = expressHandlebars.create({
  handlebars : allowInsecurePrototypeAccess(Handlebars)
})

//Tells express we are using handlebars
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars')

app.get("/now", (request, response) => {
  const date = new Date();
  response.send(date);
});

// Client makes a request to the webserver
app.get("/flipcoin", (req, res) => {
  // Defines a function that returns heads or tails
  const coinflip = !Math.floor(Math.random() * 2) ? "Heads" : "Tails"; // Regular express method

  //server is returning a response
  res.send(coinflip);
});

/* This is the routes for my Music database */

app.get("/Musician", async (req, res) => {
  const allMusicians = await Musician.findAll();

  res.json(allMusicians);
});

app.get("/Musician/:id", async (req, res) => {
  const oneMusician = await Musician.findByPk(req.params.id);

  res.json(oneMusician);
});

app.get("/Band", async (req, res) => {
  const allBands = await Band.findAll();

  res.json(allBands);
});

app.get("/Band/:id", async (req, res) => {
  const oneBand = await Band.findByPk(req.params.id);

  res.json(oneBand);
});

/* These are the routes for my Restaurant database */

// Making a request to /Restaurants
app.get("/Restaurants", async (req, res) => {
  // Goes into the database and looks for all the Menu Items and makes an array of json objects
  const allRestaurants = await Restaurant.findAll();
  // Server will respond with all the items found in the database
  res.json(allRestaurants);
});

// Making a request to /Restaurants-name/:name to call Restaurant by name parameter
app.get("/Restaurants-name/:name", async (req, res) => {
  // Goes into the database and looks for Restaurant by name
  const restaurantName = await Restaurant.findOne({
    where: { name: req.params.name },
  });
  // Server will respond with Restaurant object by Restaurant name
  res.json(restaurantName);
});

// Making a request to /Restaurants/:id to call single Restaurant by ID
app.get("/Restaurants/:id", async (req, res) => {
  // Goes into the database and looks for Restaurant with specific ID requested
  const allRestaurant = await Restaurant.findByPk(req.params.id);
  // Server will respond with Restaurant by specific ID
  res.json({ allRestaurant });
});

// Making a request to /Menu
app.get("/Menu", async (req, res) => {
  // Goes into the database and looks for all the Menu Items and makes an array of json objects
  const allMenus = await Menu.findAll();
  // Server will respond with all the items found in the database
  res.json(allMenus);
});

// Making a reqest to /MenuItems
app.get("/MenuItems", async (req, res) => {
  // Goes into the database and looks for all the Menu Items and makes an array of json objects
  const allMenuItems = await MenuItem.findAll();
  // Server will respond with all the items found in the database
  res.json(allMenuItems);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
