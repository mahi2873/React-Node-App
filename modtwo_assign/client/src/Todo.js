import { useEffect, useState } from "react";

import './Todo.css';
import { clearFetch, getFetch, postFetch } from "./useFetch";

const Todo = () => {

    const [data,setData] = useState([]);

    //Handling and Submitting task to backend *starting*
   const taskSubmit = async () => {

        // event.preventDefault();

        const taskValue = document.querySelector('.task').value;

        const jsonData = {
            id: "",
            todo: taskValue
        
        }
        
        //Fetch Api to post the data in backend *starting*

        postFetch(jsonData,setData);
         
        //Fetch Api to post the data in backend *ending*
    
        
    }
    //Handling and Submitting task to backend *starting*


    useEffect(() => {
      return () => {
        getFetch(setData);
      };
    },[data])


    const clrurl = 'http://localhost:5000/clearStorage';
    
    useEffect(() => {
      return () => {
        clearFetch(clrurl);
      };
    }, [])
    





  return (
    <>
        <div className="container">
            <div className="todoContainer">
                    
                    <div className="heading">
                    To Do List App
                    </div>

                    <div className="todoContent">
                        <label htmlFor="task">Enter the Tasks:</label>
                        <input type="text" className="task" />
                        <button type="submit" onClick={taskSubmit}>Add the Task</button>
                    </div>

                    {/* <div className="listItem"> */}
                        {/* <ul> */}
                            {data.map((data,index)=>
                            
                            {
                            return(
                            
                            <div className="listItem" key={index}>
                            <ul>
                            <li>
                            <div className="item">
                            <div className="txtctn">
                            {data.todo}
                            </div>
                            {/* <button value={index} onClick={deleteTask}>X</button> */}
                            </div>
                            </li>
                            </ul>
                            </div>

                            )
                            
                            })}
                            
                        {/* </ul> */}
                    {/* </div> */}

            </div>
        </div>
    </>
  )
}
export default Todo