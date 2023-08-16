const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const UserRoutes = require('./routes/UserRoutes');

dotenv.config();

const PORT = process.env.PORT;

// Connecting to database
mongoose.connect('mongodb+srv://mahi:mahi@cluster0.k5k82rk.mongodb.net/sales?retryWrites=true&w=majority')

mongoose.connection.on('connected',()=>{
    console.log('Connected')
})

mongoose.connection.on('error',(error)=>{
    console.log('Some error while connecting')
})

// Using cors for incoming and outgoing of information especially while fetching data from frontend from different port.
// Using cors for the purpose of different for ports used in frontend and backend.
app.use(cors());

// Accept data in json format.
app.use(express.json());

// importing and using user model in all APIs.
require('./models/User');

// middleware for all routes
app.use(UserRoutes);



// app.post('/signup',(req,res)=>{

//     const user = req.body;
//     console.log(user);
//     res.send(user);

// });

// Running app  in a port
app.listen(PORT,()=>{

    console.log("Server is listening on port 5k");

})
