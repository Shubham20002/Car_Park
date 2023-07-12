const express=require('express');
const router=express.Router();
const passport=require('../config/passport-local-strategy');
//importing actions for home routes
const usercontroller=require('../controllers/usercontroller');

router.get('/signup',usercontroller.signup);
router.get('/signin',usercontroller.signin);
router.get('/update',usercontroller.update);

router.post('/create-user',usercontroller.createuser);
router.post('/resetpassword/:id',usercontroller.resetpassword);

router.post('/create-session',passport.authenticate(
    'local',{failureRedirect: '/user/signin'}
),usercontroller.createsession);

router.get('/signout',usercontroller.destroysession);


module.exports=router;