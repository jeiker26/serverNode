module.exports = function(app){
	var Rutes = require('../models/rutes');

	//GET
	findAllRutes = function(req, res){
		Rutes.find(function(err,rutes){
			if(!err) res.send(rutes);
			else console.log('ERROR:' + err);
		});
	};

	//GET
	findRutesByUser = function(req, res) {
		Rutes.findById(req.params.user, function(err, rutes){
			if(!err) res.send(rutes);
			else console.log('ERROR:' + err);
		});
	};

	//POST
	addRute = function(req,res){
		console.log ('POST');
		console.log (req.body);

		var rute = new Rutes({
			user:       req.body.user,
			info:       req.body.info,
			rutes:      req.body.rutes
		});
		
		rute.save(function(err){
			if(!err) console.log('Ruta Guardado');
			else console.log('ERROR:' + err);
		});

		res.send(rute);
	};

	//PUT(UPDATE)
	updateRute = function(req,res){
		Rutes.findById(req.params.id, function(err, rute){

			rute.user =      req.body.user;
			rute.info =      req.body.info;
			rute.rutes =      req.body.rutes;

			rute.save(function(err){
				if(!err) console.log('Rute Update');
				else console.log('ERROR:' + err);
				res.send(rute);
			});
		})
	};

	//DELETE
	deleteRute = function(req,res){
		Rutes.findById(req.params.id, function(err, rute){
			rute.remove(function(err){
				if(!err){ 
					console.log('Rute Delete');
					res.send("Rute deleted");
				}
				else {
					console.log('ERROR:' + err);
				}

			})
		});
	};

	//API ROUTES
	app.get('/allRutes', findAllRutes);
	app.get('/findRute/:user',findRutesByUser);//Rehacer
	app.post('/addRute', addRute);
	app.put('/updateRute/:id',updateRute);
	app.delete('/delRute/:id',deleteRute);
}



