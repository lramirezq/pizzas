module.exports = function(app) {

 // var Pizza = require('../models/pizzadb.js');
  var Pizza = require('../models/pizzadb.js');

  //GET - Return all pizzas in the DB
  findAllPizzas = function(req, res) {
  	Pizza.find(function(err, pizzas) {
  		if(!err) {
        console.log('GET /pizzas')
  			res.send(pizzas);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a Pizza with specified ID
  findById = function(req, res) {
  	Pizza.findById(req.params.id, function(err, pizza) {
  		if(!err) {
        console.log('GET /pizza/' + req.params.id);
  			res.send(pizza);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Insert a new Pizza in the DB
  addPizza = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var pizza = new Pizza({
  		tamanno:    req.body.tamanno,
  		precio: 	  req.body.precio,
  		ingredientes:  req.body.ingredientes,
  		nombre:   req.body.nombre,
  		telefono:  req.body.telefono,
  		direccion:    req.body.direccion,
  	});

  	pizza.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(pizza);
  };

  //PUT - Update a register already exists
  updatePizza = function(req, res) {
  	Pizza.findById(req.params.id, function(err, pizza) {
  		pizza.title   = req.body.petId;
  		pizza.year    = req.body.year;
  		pizza.country = req.body.country;
  		pizza.poster  = req.body.poster;
  		pizza.seasons = req.body.seasons;
  		pizza.genre   = req.body.genre;
  		pizza.summary = req.body.summary;

  		pizza.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(pizza);
  		});
  	});
  }

  //DELETE - Delete a Pizza with specified ID
  deletePizza = function(req, res) {
  	Pizza.findById(req.params.id, function(err, pizza) {
  		pizza.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/pizzas', findAllPizzas);
  app.get('/pizza/:id', findById);
  app.post('/pizza', addPizza);
  app.put('/pizza/:id', updatePizza);
  app.delete('/pizza/:id', deletePizza);

}