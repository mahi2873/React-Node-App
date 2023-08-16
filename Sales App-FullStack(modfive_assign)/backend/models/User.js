const mongoose = require('mongoose');

// Creating Schema for users collection
const userSchema = new mongoose.Schema({


    firstname:{
        type: String,
        required: true,
    },

    lastname:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },

    password:{
        type: String,
        required: true,
    },



})

module.exports = mongoose.model('users', userSchema);