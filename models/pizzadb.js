var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var pizzaSchema = new Schema({
	tamanno:	{ type: String, enum :
					['individual', 'mediana', 'familiar']
				},
	precio: 		{ type: Number },
	ingredientes: 	{ type: String },
	nombre:  	{ type: String },
	telefono: 	{ type: String },
	direccion: 	{ type: String }    
});


module.exports = mongoose.model('Pizza', pizzaSchema);