const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const allRoutes = require('./routes/Routes');

dotenv.config();

const PORT = process.env.PORT;

// Connect database via mongoose
mongoose.connect('mongodb+srv://mahi:mahi@cluster0.k5k82rk.mongodb.net/ecoms?retryWrites=true&w=majority')

mongoose.connection.on('connected',()=>{
    console.log('Connected')
})

mongoose.connection.on('error',(error)=>{
    console.log('Some error while connecting')
})

// Cross-Origin middleware.
app.use(cors());
// body request via express.json() middleware.
app.use(express.json());

// Importing schemas from models 
require('./models/User');

// Getting all routes
app.use(allRoutes);


// Running backend on port
app.listen(PORT,()=>{

    console.log("Server is listening on port 5000");

})
