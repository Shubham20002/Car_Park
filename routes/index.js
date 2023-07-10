const express=require('express');
const router=express.Router();
//importing actions for home routes
const homecontroller=require('../controllers/homecontroller');

router.get('/',homecontroller.home);
router.use('/user',require('./user'));

module.exports=router;