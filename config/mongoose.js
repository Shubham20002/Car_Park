// getting-started.js
const mongoose = require('mongoose');
const atlas=`mongodb+srv://shubham992284:shubham@cluster0.y8knbib.mongodb.net/?retryWrites=true&w=majority`;
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(atlas);
  console.log("connected to db");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



