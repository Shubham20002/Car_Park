const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
},
    async function (req, email, password, done) {
        // find a user and establish the identity
      const user=await  User.findOne({ email: email });
      if(!user || password !=user.password){

        req.flash('error','email or password does not match');
        return done(null,false)
        
      }
            return done(null, user);
        } 
));


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
    done(null, user.id);
});


// deserializing the user from the key in the cookies
passport.deserializeUser(async function (id, done) {
 const user=await User.findById(id); 
        return done(null, user);
    });

//check the user is Authenticated or not
passport.checkauthentication=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }

//if the user is not signed in
req.flash('error','you have logged out');
    return res.redirect('/user/signin');
}
   

passport.setAuthenticatedUser = function (req, res, next) {
    if (req.isAuthenticated()) {
        //req.user contain the current signed in user from session cookie and we are just sending this to the locals for the views
        res.locals.user = req.user;
    }
    next();
}

    

 module.exports=passport;