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
app.set("views", "./views");

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

// Adding a new musician object to database
app.post('/musicians', async (req, res) => {
	let newMusician = await Musician.create(req.body);
	res.send('Created!')
})

// Updating a new musician object to database
app.put("/musicians/:id", async (req, res) => {
	let updated = await Musician.update(req.body, {
		where : {id : req.params.id} // Update a musician where the id matches, based on req.body
	})
	res.send("Updated!!")
})

// Deleting a musician object by id 
app.delete('/musicians/:id', async (req, res) => {
	await Musician.destroy({
		where : {id : req.params.id} // Destory an Musician where this object matches
	})
	res.send("Deleted!!")
})

app.get("/Band", async (req, res) => {
  const allBands = await Band.findAll();

  res.json(allBands);
});

app.get("/Band/:id", async (req, res) => {
  const oneBand = await Band.findByPk(req.params.id);

  res.json(oneBand);
});

/* These are the routes for my Restaurant database */

// This will get back all restaurants as json Objects

// app.get("/restaurants", async (req, res) => {
//   // Goes into the database and looks for all the Menu Items and makes an array of json objects
//   const restaurants = await Restaurant.findAll()
//   // Server will respond with all the items found in the database
//   res.json(restaurants);
// });


// Making a request to /Restaurants
app.get("/restaurants", async (req, res) => {
  // Goes into the database and looks for all the Menu Items and makes an array of json objects
  const restaurants = await Restaurant.findAll()
  // Server will render handlebars template
  res.render("restaurants", {restaurants});
});

app.post('/restaurants', async (req, res) => {
	let newRestaurant = await Restaurant.create(req.body);
	res.send('Created!')
})

app.put("/restaurants/:id", async (req, res) => {
	let updatedRestaurants = await Restaurant.update(req.body, {
		where : {id : req.params.id} // Update a musician where the id matches, based on req.body
	})
	res.send("Updated!!")
})

app.delete('/restaurants/:id', async (req, res) => {
	await Restaurant.destroy({
		where : {id : req.params.id} // Destory an Musician where this object matches
	})
	res.send("Deleted!!")
})

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
  const restaurantId = await Restaurant.findByPk(req.params.id);
  // Server will respond with Restaurant by specific ID
  res.render("restaurant", { restaurantId });
});

// Making a request to /Menu
// app.get("/Menu", async (req, res) => {
//   // Goes into the database and looks for all the Menu Items and makes an array of json objects
//   const allMenus = await Menu.findAll();
//   // Server will respond with all the items found in the database
//   res.json(allMenus);
// });

app.get("/Menu", async (req, res) => {
  // Goes into the database and looks for all the Menu Items and makes an array of json objects
  const menus = await Menu.findAll();
  // Server will respond with all the items found in the database
  res.render('menu', { menus });
});

app.post('/Menu', async (req, res) => {
	let newMenu = await Menu.create(req.body);
	res.send('Created!')
})

app.put("/Menu/:id", async (req, res) => {
	let updatedMenu = await Menu.update(req.body, {
		where : {id : req.params.id} // Update a musician where the id matches, based on req.body
	})
	res.send("Updated!!")
})

app.delete('/Menu/:id', async (req, res) => {
	await Menu.destroy({
		where : {id : req.params.id} // Destory an Musician where this object matches
	})
	res.send("Deleted!!")
})

// Making a reqest to /MenuItems
// app.get("/MenuItems", async (req, res) => {
//   // Goes into the database and looks for all the Menu Items and makes an array of json objects
//   const allMenuItems = await MenuItem.findAll();
//   // Server will respond with all the items found in the database
//   res.json(allMenuItems);
// });

app.get("/MenuItems", async (req, res) => {
  // Goes into the database and looks for all the Menu Items and makes an array of json objects
  const menuItems = await MenuItem.findAll();
  // Server will respond with all the items found in the database
  res.render('menuItems',{menuItems});
});

app.post('/MenuItems', async (req, res) => {
	let newMenuItem = await MenuItem.create(req.body);
	res.send('Created!')
})

app.put("/MenuItems/:id", async (req, res) => {
	let updatedMenuItem = await MenuItem.update(req.body, {
		where : {id : req.params.id} // Update a musician where the id matches, based on req.body
	})
	res.send("Updated!!")
})

app.delete('/MenuItems/:id', async (req, res) => {
	await MenuItem.destroy({
		where : {id : req.params.id} // Destory an Musician where this object matches
	})
	res.send("Deleted!!")
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
