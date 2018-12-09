var mongoose = require("mongoose");
var Cinema = mongoose.model("Cinema");


var fs=require("fs");

module.exports.test = function(req, res) {
  res.render("land1.html", { status: "success" });
};
//login
module.exports.test1 = function(req, res, next) {
 
  //res.render("signin.html", { status: "success" });
};
//validating
module.exports.matching = function(req, res, next) {
  req.check('username', 'Invalid user name entered').equals(req.body.username);
  req.check('password', 'Password is invalid').isLength({min: 4}).equals(req.body.confirmPassword);

  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;
  }
  res.redirect('index.html');
};
module.exports.sessmng=function(req,res){
user_schema.statistics.authenticate=function(email,password,callback){
  user.findOne({email:email})
    .exec(function(err,user){
      if(err){
        return callback(err)
      }
      else if (!user){
        var err=new Error('user not found');
        err.status=401;
        return callback(err);
      }
      bcrypt.compare(password,user.password,function(err,result){
        if(result===true){
          return callback(null,user);
        }
        else{
          return callback();
        }
      })
    });
}
};
module.exports.test2 = function(req, res) {
  
  res.render("signup.html", { status: "success" });

};
module.exports.test3 = function(req, res) {
  res.render('signin.html', { title: 'Validation', success: req.session.success, errors: req.session.errors });
  req.session.errors = null;
  //res.render("signin.html", { status: "success" });
};
module.exports.logout = function(req, res,next) {
  if (req.session) {
    console.log("destroying session " + req.session.userId);
    // delete session object
    req.session.destroy();
    res.locals.user = undefined;
    res.redirect("/");
  }
 /*if(req.session){
   req.session.destroy(function(err){
     if(err){
       return next(err);
     }
     else {
       return res.redirect('/');
     }
   });*/
 
  //req.logout();

	//req.flash('success_msg', 'You are logged out');

	//res.redirect('/');
};

module.exports.createCinema = function(req, res) {
  Cinema.create(
    {
      id: 1,
      cinema_name: "cineplex",
      location: "model town",
      capacity: 200,
      reserved: 3,
      goldPrice: 940,
      silverPrice: 340,
      rating: 3,
      description: "Best in town",
      movList: [
        {
          movieid: 1,
          title: "the nun",
          genre: "horror",
          language: "english",
          rating1: 2,
          image:
          {
            data: fs.readFileSync('./public/img/thumbnails/aquaman.jpg').toString('base64'),
            contentType : 'image/jpg'
          },
          description1: "dmscmf",
          timeS: [
            {
              time1: new Date(),
              date1: new Date(),
              reservedS: 1
            },
            {
              time1: new Date(),
              date1: new Date(),
              reservedS: 1
            }
          ]
        },
        {
          movieid: 2,
          title: "the moonstone",
          genre: "horror",
          language: "english",
          rating1: 2,
          description1: "dsdsdff",
          timeS: [
            {
              time1: new Date(),
              date1: new Date(),
              reservedS: 1
            },
            {
              time1: new Date(),
              date1: new Date(),
              reservedS: 1
            }
          ]
        }
      ]
    },
    function(err, cinema) {
      if (err) {
        console.log(err);
      } else {
        console.log(cinema);
        res.render("index.html", { cinemaData: cinema });
      }
    }
  );
};