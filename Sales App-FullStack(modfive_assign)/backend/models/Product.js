const mongoose = require('mongoose');

// Creating Schema for products collection
const productSchema = new mongoose.Schema({

    id:{
        type:Number,
        required: true
    },
    
    salesid:{
        type: String,
        required: true,
    },

    name:{
        type: String,
        required: true,
    },

    quantity:{
        type: Number,
        required: true,
    },

    amount:{
        type: Number,
        required: true,
    },



})

module.exports = mongoose.model('products', productSchema);