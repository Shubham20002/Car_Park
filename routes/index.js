const express=require('express');
const router=express.Router();
const passport=require('../config/passport-local-strategy');
//importing actions for home routes
const homecontroller=require('../controllers/homecontroller');

router.get('/',passport.checkauthentication,homecontroller.home);
router.use('/user',require('./user'));
router.use('/parking',require('./parking'));

module.exports=router;