var request = require("request");
var bodyParser=require("body-parser");
var mongoose = require("mongoose");


//require('../models/usersdb');
var usersdb=require('../models/usersdb');
var payment1=require('../models/payment');
module.exports.nothing1 = function(req, res) {
    res.render("payment.html", {
    });
};
//post req on index.html
module.exports.getmovie = function(req, res) {
var username=req.params.username;
globalstring+=username;

payment1.find({username: username}, ["_id"]).exec( 
    function(err, payment) {
		if(payment1._id==null)
		{
			pay=new payment1(
				{
					username:username
				});
			pay.save(function(error) {
				 console.log("Your user has been saved!");
			 if (error) {
					 console.error(error);
				 }
				}
			)
	}
	else
	console.log("Your user exists");

    }
);
	
		/*pay=new payment1(
			{
				username:username
			});
		pay.save(function(error) {
		     console.log("Your user has been saved!");
		 if (error) {
			     console.error(error);
			 }
	}
		)
		*/


	
};
module.exports.getmovie1 = function(req, res) {
	var movie=req.params.movie;
	console.log(globalstring);
	//payment1
		//.find(globalstring)
		//.exec(function(err,payment){

			
				//payment1.movie_name=movie;
				//console.log("21");
				payment1.update({ username: globalstring }, { $set: { movie_name: movie }}, function (err, payment) {
					if (err) return handleError(err);
					res.send(payment);
				  });
		//}
		//)
		
	
		
	};
	module.exports.getmovie2 = function(req, res) {
		var seats=req.params.seats;
		console.log(globalstring);
		//payment1
			//.find(globalstring)
			//.exec(function(err,payment){
	
				
					//payment1.movie_name=movie;
					//console.log("21");
					payment1.update({ username: globalstring }, { $set: {  select_seats: seats}}, function (err, payment) {
						if (err) return handleError(err);
						res.send(payment);
					  });
			//}
			//)
			
		
			
		};
		module.exports.getcinema = function(req, res) {
			var name=req.params.name;
			console.log(globalstring);
			//payment1
				//.find(globalstring)
				//.exec(function(err,payment){
		
					
						//payment1.movie_name=movie;
						//console.log("21");
						payment1.update({ username: globalstring }, { $set: {  cinema_name: name}}, function (err, payment) {
							if (err) return handleError(err);
							res.send(payment);
						  });
				//}
				//)
				
			
				
			};

module.exports.userCreate = function(req, res) {
	
	console.log(req.body);
    var city1= req.body.city;
	 console.log(city1);
	//var email = req.body.email;
	//var username = req.body.username;
	//var password = req.body.password;
	//var password2 = req.body.password2;
	//remove name and add city
	
	/*// Validation
	req.checkBody('city', 'city is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
	var errors = req.validationErrors();
	if (errors) {
		res.render('signup.html', {
			errors: errors
		});
	}
	else {
		//checking for email and username are already taken
		usersdb.findOne({ username: { 
			"$regex": "^" + username + "\\b", "$options": "i"
	}}, function (err, usersdb) {
			usersdb.findOne({ email: { 
				"$regex": "^" + email + "\\b", "$options": "i"
		}}, function (err, mail) {
				if (user || mail) {
					res.render('signup.html', {
						user: user,
						mail: mail
					});
				}
				else {
					var newUser = new usersdb({
						city: city,
						email: email,
						username: username,
						password: password
					});
					usersdb.createUser(newUser, function (err, usersdb) {
						if (err) throw err;
						console.log(user);
					});
         	req.flash('success_msg', 'You are registered and can now login');
					res.redirect('signin.html');
				}
			});
		});
	}
	*/
};
