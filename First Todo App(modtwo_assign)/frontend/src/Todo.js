import { useEffect, useState } from "react";

// Importing Custom CSS
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

    // url to clear storage
    const clrurl = 'http://localhost:5000/clearStorage';
    
    // clearing storage on refresh
    useEffect(() => {
      return () => {
        clearFetch(clrurl);
      };
    }, [])
    





  return (
    <>
        <div className="container">
            <div className="todoContainer">
                    
                    {/* Heading for todo app *starting*/}
                    <div className="heading">
                    To Do List App
                    </div>
                    {/* Heading for todo app *ending*/}

                    {/* Input control for todo app *starting*/}
                    <div className="todoContent">
                        <label htmlFor="task">Enter the Tasks:</label>
                        <input type="text" className="task" />
                        <button type="submit" onClick={taskSubmit}>Add the Task</button>
                    </div>
                    {/* Input control for todo app *ending*/}

                  {/* List item to display *starting*/}
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
                {/* List item to display *starting*/}

            </div>
        </div>
    </>
  )
}
export default Todo