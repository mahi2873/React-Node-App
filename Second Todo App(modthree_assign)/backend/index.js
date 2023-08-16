const express = require('express');
const app = express();
const mysql = require('mysql');
const cors =require('cors');

// express.json() middleware
app.use(express.json());

// Cross-Origin middleware
app.use(cors());

// Creating pool connection 
const pool = mysql.createPool({

connectionLimit : 10,
host : 'localhost',
user : 'root',
password : '',
database : 'tododb'

})

// Connecting to Database
pool.getConnection((err, connection)=>{

    if(err) throw err;

    console.log('Connection to Database');

})

// API to get all Items added in database.
app.get('/getItem',(req,res)=>{


    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * FROM list', (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
            
            console.log('The data from list table are: \n', rows)
        })
    })
    
});

//API for adding items in todo app
app.post('/addItem',(req,res)=>{

    pool.getConnection((err, connection) => {
        if(err) throw err
        
        const params = req.body
        connection.query('INSERT INTO list SET ?', params, (err, rows) => {
        connection.release() // return the connection to pool
        if (!err) {
            res.send(`Item is added in the Todo List.`)
        } else {
            console.log(err)
        }
        
        console.log('The data from list table are:11 \n', rows)

        })
    })

});

// API to delete item of specific id.
app.delete('/deleteItem/:id',(req,res)=>{


    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('DELETE FROM list WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.send(`List with the record ID ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }
            
            console.log('The data from list table are: \n', rows)
        })
    })


})


// Running backend on port
app.listen('5000',()=>{

    console.log('Server is listening on 5000');

})