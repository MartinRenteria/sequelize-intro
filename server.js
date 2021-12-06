const express = require("express");
const app = express();
const port = 3000;
const { Restaurant, Menu, MenuItem } = require('./modals/index')

app.use(express.static("public"));

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

// Making a request to /Menu
app.get('/Menu', async (req, res) => {
    // Goes into the database and looks for all the Menu Items and makes an array of json objects
    const allMenus = await Menu.findAll()
    // Server will respond with all the items found in the database
    res.json(allMenus)
})

// Making a reqest to /MenuItems 
app.get('/MenuItems', async (req, res) => {
    // Goes into the database and looks for all the Menu Items and makes an array of json objects
    const allMenuItems = await MenuItem.findAll()
    // Server will respond with all the items found in the database
    res.json(allMenuItems)
})

// Making a request to /Restaurants
app.get("/Restaurants", async (req, res) => {
    // Goes into the database and looks for all the Menu Items and makes an array of json objects
  const allRestaurants = await Restaurant.findAll();
    // Server will respond with all the items found in the database
  res.json(allRestaurants);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
