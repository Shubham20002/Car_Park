const express=require('express');
const router=express.Router();
//importing actions for home routes
const usercontroller=require('../controllers/usercontroller');

router.get('/signup',usercontroller.signup);
router.post('/create-user',usercontroller.createuser);


module.exports=router;