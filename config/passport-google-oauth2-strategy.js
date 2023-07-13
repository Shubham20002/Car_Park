const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');


// tell passport to use a new strategy for google login
passport.use(new googleStrategy({
        clientID: '499906822810-j106aq13212ob0isusheeu2e037m6851.apps.googleusercontent.com', // e.g. asdfghjkkadhajsghjk.apps.googleusercontent.com
        clientSecret: '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', // e.g. _ASDFA%KFJWIASDFASD#FAD-
        callbackURL: "http://localhost:8000/user/auth/google/callback",
    },

    async function(accessToken, refreshToken, profile, done){
        // find a user
      const user=await  User.findOne({email: profile.emails[0].value});
           
            // console.log(accessToken, refreshToken);
            // console.log(profile);

            if (user){
                // if found, set this user as req.user
                return done(null, user);
            }else{
                // if not found, create the user and set it as req.user
              const user=await  User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                })

                    return done(null, user);
                }
            

        }) 
);





module.exports = passport;
