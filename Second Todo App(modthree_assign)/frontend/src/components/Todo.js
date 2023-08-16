import {useEffect, useState} from 'react';
import axios from 'axios';


const Todo = () => {

const [item,setItem] = useState([]);
const [data,setData] = useState([0]); 

const addItem = async() => {

if(item){

    console.log(item);

  let result = await axios.post('http://localhost:5000/addItem',{item});

  getItem();

  console.log(result);

}else{

    console.log('Add Item correctly');
}


}

// Fetching all todo items
const getItem = async()=>{

    let result = await axios.get('http://localhost:5000/getItem')

    if(result){

        setData(result.data);
        console.log(result);

    }

}

useEffect(()=>{

    getItem();

},[])


  //Handle delete item functionality 
    const handleDelete = async(value) => {

        let result = await axios.delete(`http://localhost:5000/deleteItem/${value}`)

        if(result){

            getItem();

        }else{

            console.log(result);

        }


    }


  return (
    <>

    <div className='homeContainer'>

        <div className="heading display-1 py-3 text-light">
            To Do List App
        </div>
        <div className="input-control">
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Enter the Task :</span>
            <input type="text" value={item} onChange={(e)=> setItem(e.target.value)} className="form-control" placeholder="Enter the Task Here" aria-label="Username" aria-describedby="basic-addon1"/>
            <button className='btn btn-success' onClick={addItem}>Add Task</button>
        </div>
        <div>
        </div>
        </div>

        {/* Displaying all todo items */}
        {data.map((elements, index)=>
        <div className="list-content" key={index}>
        <ul className="list-group">
            <li className="list-group-item">
                <span>{elements.item}</span>
                <button className='btn btn-primary' onClick={()=>handleDelete(elements.id)}>X</button>
            </li>
        </ul>
        </div>
        )}
        

    </div>

    </>
  )
}
export default Todo