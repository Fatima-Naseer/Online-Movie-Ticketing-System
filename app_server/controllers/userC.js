module.exports.nothing2 = function(req, res) {
    sess = req.session;
    if(sess.username) {
    res.render("user.html", {
        user_n:"Mark",
        city:"Karachi",
        email:"markZucker@gmail.com",
        phone:"0321-3245237"

    });
}
else {
    res.write('<h1>Please login first!</h1>');
    res.end('<a href="+">Login</a>');
}
};