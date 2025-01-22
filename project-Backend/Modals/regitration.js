const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  phone: {
    type: String,
    
  },
  password: {
    type: String,
   
  },
});

 const Registration = mongoose.model('reg', UserSchema);
 
 module.exports = Registration;
