const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/(replace with our DB name here)');



const connection = mongoose.connection;
// defines the auth.js secret
const jwtSecret = 'potaToe';



module.exports = {
    jwtSecret,
    connection
  };