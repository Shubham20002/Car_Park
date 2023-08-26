const mongoose = require('mongoose');

const { Schema } = mongoose;

const parkingSchema = new Schema({
    number:{
        type:Number,
        required:true
      },
    user:{
    type:String,
  },
  used:{
    type:String
  }
},{
    timestamps:true
});

const Parking = mongoose.model('Parking', parkingSchema);

module.exports=Parking;