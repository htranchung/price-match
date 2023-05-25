
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Bright_Verdant:752105%23Rr@cluster-0.gohngx7.mongodb.net/?retryWrites=true&w=majority');



const connection = mongoose.connection;
// defines the auth.js secret
const jwtSecret = 'potaToe';



module.exports = {
    jwtSecret,
    connection
  };
