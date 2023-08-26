const mongoose = require('mongoose');

const { Schema } = mongoose;

const parkingSchema = new Schema({
    number:{
        type:Number,
        required:true
      },
    name:{
    type:String,
  },
  used:{
    type:Boolean
  }
},{
    timestamps:true
});

const Parking = mongoose.model('Parking', parkingSchema);

module.exports=Parking;