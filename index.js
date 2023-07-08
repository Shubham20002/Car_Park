const express=require('express');
const port=8000;
const app=express();

app.listen(port,function(err){
    if(err){
        console.log("error while server starting");
    }
    console.log("server start on port no"+port);
})