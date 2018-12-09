module.exports.nothing3 = function(req, res,next) {
  /*  if(req.sess && req.sess.username){
    res.render('watchhist.html');
    }
    else{
        console.log("You must be logged in to view this page.");
    }
*/
    sess = req.session;
    if(sess.username) {
    //res.write('<h1>Hello '+sess.username+'</h1>');
    res.render("watchhist.html", {
        watch1:[
            {
                id:1,
                cine_n:"Cinegold",
                movie_n:"Parwaz hai junoon",
                
            },
            {
                id:2,
                cine_n:"universal",
                movie_n:"jpna 2",
                
            }
        ]
    });
    //res.end('<a href="+">Logout</a>');
    } 
    else {
        res.write('<h1>Please login first!</h1>');
        res.end('<a href="+">Login</a>');
    }
};