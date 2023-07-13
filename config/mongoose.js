// getting-started.js
const mongoose = require('mongoose');
const atlas=`mongodb+srv://shubham992284:Sanju1967%40dp@cluster0.y4x6xrw.mongodb.net/node_authenticate`;
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(atlas);
  console.log("connected to db");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



