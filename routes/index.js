const express=require('express');
const router=express.Router();
//importing actions for home routes
const homecontroller=require('../controllers/homecontroller');

router.use('/',homecontroller.home);


module.exports=router;