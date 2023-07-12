const User=require('../models/user');

module.exports.signup=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('user_signup',{
       title:'signup'
    })
};

module.exports.signin=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('user_signin',{

    })
};

module.exports.update=function(req,res){
   
    return res.render('passwordreset',{

    })
};

module.exports.createuser=async function(req,res){
    try{

        const user=await User.findOne({email:req.body.email});
        if(!user){
            const user= await User.create(req.body);
            req.flash('success','user created successfully');
            return res.redirect('/user/signin')
            // return res.status(200).json({
            //    message:"user added successfully",
            //    data:user
            // })
        }
        else{
            req.flash('error','user already present');
            return res.redirect('/user/signin')
            // return res.status(200).json({
            //     message:"user already added",
            //     data:user
            //  })
        }
      
    }
    catch{
        console.log('error while user adding');
        return res.status(500).json({
            message:"error while user adding"
        });
    }   
};

module.exports.createsession=function(req,res){
    req.flash('success','logged in successfully');
    return res.redirect('/')
};

module.exports.destroysession=function(req,res){
    
    req.logout(function(err,) {
        if (err) { return next(err);
          }
          
       
      });
      req.flash('success','loged out successfully');
      return res.redirect('/');
}

module.exports.resetpassword= async function(req,res){
    console.log(req.body.password);
    console.log(req.params)
    
    let user=await User.findById(req.params.id);
    
    user.name=req.body.name;
    user.email=req.body.email;
    user.password=req.body.password;
    user.save();
    req.flash('success','password reset successfully');
    return res.redirect('/');
}