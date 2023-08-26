const User=require('../models/parking');

module.exports.home=function(req,res){
    return res.render('home',{
        home:"this is home pahge"
    })
}