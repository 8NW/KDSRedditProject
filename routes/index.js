// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('homepage.ejs', { title: 'Express' });
// });
//
// module.exports = router;
//
var express = require('express');
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

module.exports = function(app, passport) {


/* GET home page. */
app.get('/', function(req, res) {
  res.render('homepage.ejs', {
  isLogged: isLog(req)
});
});


    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('authenticated.ejs', {
            user : req.user
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


// send to google to do the authentication
app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

// the callback after google has authenticated the user
app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));
};


function isLog(req) {
    if (req.isAuthenticated){
      console.log('TRUE IS LOGGED IN');
        return true; }
  else {
    console.log('FALSE');
          return false;
        }


}


function isLoggedIn(req, res, next) {
  console.log('test1');
    if (req.isAuthenticated())
        return next();

    res.redirect('/fihdbi');
}
//WHERE IS ISLOGGED IN
