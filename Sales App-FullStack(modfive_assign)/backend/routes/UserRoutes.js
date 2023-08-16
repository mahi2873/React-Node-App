const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Product = require('../models/Product');

// Getting token from config file *.env* 
dotenv.config();

// API for register or signup
router.post('/signup', async(req,res)=>{

    const {firstname, lastname, email, password} = req.body;
    console.log(password);

    if(!firstname || !lastname || !email || !password){

        
        console.log('Send all details correctly');
        res.send('Send all details correctly');

    }
    else{


        let finduser = await User.findOne({email:email});

        if(finduser){

            console.log('User Already Exist');

        }

        // Encrypting password of user
        const hashedPassword = await bcrypt.hash(password,10);

        let user = await new User({firstname:firstname, lastname:lastname, email:email, password:hashedPassword})
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        console.log(result);
        const userdata = {

            id: result._id,
            firstname: result.firstname,
            email: result.email
        }

        // Signing jwt token to secure and authenticate user.
        jwt.sign({userdata}, process.env.JWTKEY, {expiresIn: '2h'}, (err,token)=>{

        if(err){

            res.status(500).json({result:'Something went wrong'});

        }            

            res.send({userdata,auth:process.env.JWTKEY+' '+token});

        })

        }

})

// API for login
router.post('/login',async(req,res)=>{

    const email = req.body.email;
    const password = req.body.password;
    console.log(password);
    let dbPass = await User.findOne({email:email});
    // Comparing password using bcrypt.js
    let checkPass = dbPass && dbPass.password? await bcrypt.compare(password,dbPass.password): false;

    if(!checkPass){

        console.log('Password is incorrect')
    }

    else{

        User.findOne({email:email}).select('-password')
        .then((response)=>{

            let user = {
                id: response._id,
                firstname: response.firstname,
                email: response.email,
            }

            // Signing jwt token to secure and authenticate user.
            jwt.sign({user}, process.env.JWTKEY,{expiresIn:'2h'},(err,token)=>{

                if(err){

                    console.log('Something went wrong');
                }

                res.send({user, auth:process.env.JWTKEY+' '+token});

            })

        })


    }


})

// API for sales entry
router.post('/addProduct',async(req,res)=>{

    const {name,quantity,amount} = req.body;
    
    const length = await Product.countDocuments({});


    const product = await new Product({id:length+1,salesid:'SI'+(100+length), name:name,quantity:quantity,amount:amount});

    // console.log(length+1);

    const saveProduct = await product.save();

    console.log(saveProduct);

    return res.send({saveProduct});

    // console.log(name,quantity,amount);


})

// API to get all products
router.get('/getProduct', verifyToken, async(req,res)=>{

    const products = await Product.find({}).sort({amount:-1}).limit(5);

    res.send({products});

})

// Total Revenue API
router.get('/totalRevenues', verifyToken, async(req,res)=>{

    const total = await Product.aggregate([

        {$group: {_id: 'revenue', totalsum: {$sum:'$amount'}}},

    ])

    res.send(total);

})

// Middleware function to verify token
function verifyToken(req,res,next){

    let jwtkey = process.env.JWTKEY;

    let token = req.headers['authorization'];

    console.log(token);

    if(token){

        token = token.split(' ')[1];
        console.log("middleware called if", token);
        jwt.verify(token, jwtkey, (err,valid)=>{

            if(err){
                console.log(err);
                res.send({result:"Please provide valid token with header"});        
            }
            else{
                next();
            }

        })

    }else{

        res.send({result:"Please add token with header"});

    }

}




module.exports = router;