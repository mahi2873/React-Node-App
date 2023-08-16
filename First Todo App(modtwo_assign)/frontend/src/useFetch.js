const postFetch = (jsonData, setData) => {


    fetch('http://localhost:5000/addTodo',
        {
        method:"POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonData)
        
        }

        ).then((result)=>{
            const newTodo = result.json();
            setData(oldTodo=>[...oldTodo,newTodo]);
        });


}


const getFetch =  (setData)=>{

   fetch('http://localhost:5000/getTodoList',
        
        {
        method:"GET",
        mode: "cors", 
        headers: {

            accept: "application/json",
            "Access-Control-Allow-Origin": "*"
            
        }
        }
        
        )
        .then((result) => result.json())
        .then((data)=>{
            setData(data);
            // console.log(data);
        }).catch(err=>{
        
            if(err){
                console.log("")
            }

        })   

}

const clearFetch = (clrurl) => {

    fetch(clrurl,{
        method:"POST",
        mode:'cors'
    })
    .then((res)=>res.json())
    .then((data)=>data);

}


export {getFetch,postFetch,clearFetch}; 