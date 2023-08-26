const Parking=require('../models/parking');

module.exports.addparking= async function(req,res){
    console.log(req.body);
    const Park=await Parking.findOne({number:req.body.number});
    if(Park){
        console.log(Park)
    
    Park.user=req.body.user;
    Park.used=req.body.used;
    Park.save();
    return res.redirect('/')


    }
    
    if(!Park){
        
        const parking= await Parking.create(req.body);
        req.flash('success','parking alloted successfully');
        // return res.redirect('/user/signin')
        return res.redirect('/')
       
    }
    else{
        req.flash('error','parking already in use');
        return res.redirect('/user/signin')
        // return res.status(200).json({
        //     message:"user already added",
        //     data:user
        //  })
    }
}

module.exports.parkform= async function(req,res){
const id=req.params.id;
    const Park=await Parking.findOne({number:id});
    return res.render('addparking',{
        home:"this is home pahge",
        parking:park
    })
}