const express=require('express');
const router=express.Router();
const passport=require('../config/passport-local-strategy');
//importing actions for home routes
const parkingcontroller=require('../controllers/parkingcontroller');



router.post('/addparking',parkingcontroller.addparking);
router.get('/parkform/:id',parkingcontroller.parkform);




module.exports=router;