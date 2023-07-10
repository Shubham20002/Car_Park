const User=require('../models/user');

module.exports.signup=function(req,res){
    return res.render('user_signup',{
       title:'signup'
    })
}
module.exports.createuser=async function(req,res){
    try{

        const user=await User.findOne({email:req.body.email});
        if(!user){
            const user= await User.create(req.body);
            return res.status(200).json({
               message:"user added successfully",
               data:user
            })
        }
        else{
            return res.status(200).json({
                message:"user already added",
                data:user
             })
        }
      
    }
    catch{
        console.log('error while user adding');
        return res.status(500).json({
            message:"error while user adding"
        });
    }
    
   
}