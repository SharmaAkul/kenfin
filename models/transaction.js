const mongoose = require('mongoose');

const userSchema    = new mongoose.Schema({
    
    email:String,
    mobile_number:String,
    message:String,
   });
  
  mongoose.model('transaction', userSchema);