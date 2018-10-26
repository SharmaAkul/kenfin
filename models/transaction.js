const mongoose = require('mongoose');

const userSchema    = new mongoose.Schema({
    name:String,
    email:String,
    mobile_number:String,
    message:String,
   });
  
  mongoose.model('transaction', userSchema);