const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({

    productname:{

        type: String,
        required: true,

    },

    imageUrl:{

        type: String,
        required: true,

    },

    price:{

        type: String,
        required: true,

    },

    addedBy:{

        type: String,
        required: true,

    }



})

module.exports = mongoose.model('cartproducts',cartSchema);