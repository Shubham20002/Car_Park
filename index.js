const express=require('express');
const port=8000;
const app=express();

const expressLayout=require('express-ejs-layouts');




app.use(expressLayout);
//setup for ejs view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));
//server starting on port no 8000
app.listen(port,function(err){
    if(err){
        console.log("error while server starting");
    }
    console.log("server start on port no"+port);
});
