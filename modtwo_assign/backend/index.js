const express = require('express');
const app = express();
const cors = require('cors');
const storage = require('node-persist');
const bodyParser = require('body-parser');


// app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.post('/addTodo', async(req,res)=>{

    const todos = (await storage.getItem("todos")) || [];    
    const newTodo = req.body;
    console.log(newTodo);    
    newTodo.id = todos.length + 1;    
    await storage.setItem("todos", [...todos, newTodo]);
    res.json({message:"Item added successfully"});    

});

app.get('/getTodoList',async(req,res)=>{

    const todos = await storage.getItem('todos');
//     let list = [];

//    const alldata =  todos.forEach(todos => 
//     {
        
//         list.push(

//             {
//                 todo: todos.todo
//             }
//         )
          
//     }
//         );

    // res.send(list);
    res.json(todos);

});


app.post('/clearStorage',async(req,res)=>{

    await storage.clear();
    await storage.init();
    // res.send({message:"Restarted and clear the storage"});

})



app.listen(5000, async()=>{

    await storage.init();

    console.log('Server is listening on port 5K');
}

)