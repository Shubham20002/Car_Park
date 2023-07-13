const express=require('express');
const port=8000;
const app=express();
const expressLayout=require('express-ejs-layouts');
const db=require('./config/mongoose');
//used for seeeion cookie
const session= require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const MongoStore=require('connect-mongo');
const flash=require('connect-flash');
const customMware=require('./config/middleware');
const passportGoogle=require('./config/passport-google-oauth2-strategy');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('./assets'));



app.use(expressLayout);
//setup for ejs view engine
app.set('view engine','ejs');
app.set('views','./views');

 //extract the style and script from sub pages to layouts
 app.set('layout extractStyles', true);
 app.set('layout extractScript',true);


//mongo store is used to store the session cookie in the db
app.use(session({
    name:'codeial',
    //todo change the secret before deployement in production mode
    secret: 'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*60)
    },
    store:MongoStore.create({ mongoUrl: 'mongodb://localhost/Node_Authentication' })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(customMware.setFlash);


app.use('/',require('./routes'));
//server starting on port no 8000
app.listen(port,function(err){
    if(err){
        console.log("error while server starting");
    }
    console.log("server start on port no"+port);
});
