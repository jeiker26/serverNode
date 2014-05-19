module.exports = function(app){
	var Users = require('../dao/models/usersDAO');

	//GET
	findAllUser = function(req, res){
		Users.find(function(err,users){
			if(!err) res.send(users);
			else console.log('ERROR:' + err);
		});
	};

	//GET
	findUserByID = function(req, res) {
		Users.findById(req.params.id, function(err, user){
			if(!err) res.send(user);
			else console.log('ERROR:' + err);
		});
	};

	//POST
	addUser = function(req,res){
		console.log ('POST');
		console.log (req.body);

		var user = new Users({
			name:       req.body.name,
			password:   req.body.password,
			age:        req.body.age,
			email:      req.body.email
		});
		
		user.save(function(err){
			if(!err) console.log('User Guardado');
			else console.log('ERROR:' + err);
		});

		res.send(user);
	};

	//PUT(UPDATE)
	updateUser = function(req,res){
		Users.findById(req.params.id, function(err, user){

			user.name =      req.body.name;
			user.password =   req.body.password;
			user.age =        req.body.age;
			user.email =      req.body.email;

			user.save(function(err){
				if(!err) console.log('User Update');
				else console.log('ERROR:' + err);
				res.send(user);
			});
		})
	};

	//DELETE
	deleteUser = function(req,res){
		Users.findById(req.params.id, function(err, user){
			user.remove(function(err){
				if(!err){ 
					console.log('User Delete');
					res.send("user deleted");
				}
				else {
					console.log('ERROR:' + err);
				}

			})
		});
	};

	//API ROUTES
	app.get('/users', findAllUser);
	app.get('/user/:id',findUserByID);
	app.post('/user', addUser);
	app.put('/user/:id',updateUser);
	app.delete('/user/:id',deleteUser);
}



