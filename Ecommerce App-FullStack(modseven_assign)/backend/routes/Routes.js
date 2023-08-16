const express = require('express');
const router = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Product = require('../models/Product') 
const pdata = require('../products.json');
const User = require('../models/User');
const CartProduct = require('../models/CartProduct');
const Message = require('../models/Message');

// Testing API working.
router.get('/message',(req,res)=>{

    res.send('This is ecommerce site');

});

// Seeding data to products collection
router.post('/addProducts',async(req,res)=>{

    try {

        await Product.create(pdata)
        console.log('data successfully imported')
        res.send({result:'Products Added to DB'})
        
    } catch (error) {
        
        console.log('error', error);

    }

})

// Getting all products
router.get('/getProducts', async(req,res)=>{

const fetchProducts = await Product.find();
res.json(fetchProducts);

})


// Getting all men products
router.get('/getMenProducts',async(req,res)=>{


    const fetchMenProducts = await Product.find({stype:"Men"});
    res.json(fetchMenProducts);


});

// Getting all women products
router.get('/getWomenProducts',async(req,res)=>{


    const fetchWomenProducts = await Product.find({stype:"Women"});
    res.json(fetchWomenProducts);


});


// Getting all women dresses
router.get('/WomenDresses',async(req,res)=>{


    const fetchWomenDresses = await Product.find({stype:"Women",type:"Dresses"});
    res.json(fetchWomenDresses);


});

// Getting all women skirts
router.get('/WomenSkirts',async(req,res)=>{


    const fetchWomenSkirts = await Product.find({stype:"Women",type:"Skirts"});
    res.json(fetchWomenSkirts);


});

// Getting all women pants
router.get('/WomenPants',async(req,res)=>{


    const fetchWomenPants = await Product.find({stype:"Women",type:"Pants"});
    res.json(fetchWomenPants);


});

// Getting all men hoodies
router.get('/MenHoodies',async(req,res)=>{


    const fetchMenHoodies = await Product.find({stype:"Men",type:"Hoodies"});
    res.json(fetchMenHoodies);


});


// Getting all men shirts
router.get('/MenShirts',async(req,res)=>{


    const fetchMenShirts = await Product.find({stype:"Men",type:"Shirts"});
    res.json(fetchMenShirts);


});

// Getting all men pants
router.get('/MenPants',async(req,res)=>{


    const fetchMenPants = await Product.find({stype:"Men",type:"Pants"});
    res.json(fetchMenPants);


});

// Getting all men shorts
router.get('/MenShorts',async(req,res)=>{


    const fetchMenShorts = await Product.find({stype:"Men",type:"Shorts"});
    res.json(fetchMenShorts);


});

// Getting all kids products
router.get('/getKidsProducts',async(req,res)=>{


    const fetchKidsProducts = await Product.find({stype:"Kids"});
    res.json(fetchKidsProducts);


});

//API to register user 
router.post('/signup', async(req,res)=>{

    const {name, email, password} = req.body;
    console.log(password);

    if(!name || !email || !password){

        
        console.log('Send all details correctly');
        res.send('Send all details correctly');

    }
    else{


        let finduser = await User.findOne({email:email});

        if(finduser){

            console.log('User Already Exist');
            return res.send({result:"User Already Exist"})

        }
        else{
        const hashedPassword = await bcrypt.hash(password,10);

        let user = await new User({name:name, email:email, password:hashedPassword})
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        console.log(result);
        const userdata = {

            id: result._id,
            name: result.name,
            email: result.email
        }

        jwt.sign({userdata}, process.env.JWTKEY, {expiresIn: '120s'}, (err,token)=>{

        if(err){

            res.status(500).json({result:'Something went wrong'});

        }            

            res.send({userdata,auth:process.env.JWTKEY+' '+token});

        })

        }
    
    }

})

// API to login user
router.post('/login',async(req,res)=>{

    const email = req.body.email;
    const password = req.body.password;
    console.log(password);
    let dbPass = await User.findOne({email:email});
    let checkPass = dbPass && dbPass.password? await bcrypt.compare(password,dbPass.password): false;

    if(!checkPass){

        console.log('Password is incorrect')
        return res.send({result:"Password is incorrect"})
    }

    else{

        User.findOne({email:email}).select('-password')
        .then((response)=>{

            let user = {
                id: response._id,
                name: response.name,
                email: response.email,
            }

            jwt.sign({user}, process.env.JWTKEY,{expiresIn:'2h'},(err,token)=>{

                if(err){

                    console.log('Something went wrong');
                }

                res.send({user, auth:process.env.JWTKEY+' '+token});

            })

        })


    }


})

// API for add to cart
router.post('/addCart', async(req,res)=>{

    const addProductToCart = new CartProduct(req.body);
    const result = await addProductToCart.save();
    console.log(addProductToCart);
    console.log(req.body);
    res.json({result: "Product added to cart successfully"+result});

})

// API to get cart items count or quantity of specific id
router.get('/cartQuantity/:id', async(req,res)=>{

    const parameter = req.params.id;
    const quantity = await CartProduct.find({addedBy:parameter}).count();
    res.json(quantity);

});

// API to get all items from the cart of specific id
router.get('/cartProduct/:id',verifyToken, async(req,res)=>{

    const parameter = req.params.id;
    const fetchCartProduct = await CartProduct.find({addedBy:parameter});
    res.json(fetchCartProduct);


})

// API for sending message
router.post('/sendMessage', async(req,res)=>{

const sendmessage = new Message(req.body);
const result = await sendmessage.save();
res.send({message:"Message Sent"});
console.log(result);
});


// middleware to protect endpoints
function verifyToken(req,res,next){

    let jwtkey = process.env.JWTKEY;

    let token = req.headers['authorization'];

    // displaying token in console with secret key
    console.log(token);

    if(token){

        // Splitting and storing token in *token* keyword.
        token = token.split(' ')[1];
        // displaying token in console
        console.log("middleware called if", token);
        jwt.verify(token, jwtkey, (err,valid)=>{

            if(err){
                // console.log(err);
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