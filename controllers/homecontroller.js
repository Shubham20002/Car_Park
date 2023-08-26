const Parking=require('../models/parking');

module.exports.home= async function(req,res){

    const parking=await Parking.find({});
    return res.render('home',{
        home:"this is home pahge",
        parking:parking
    })
}