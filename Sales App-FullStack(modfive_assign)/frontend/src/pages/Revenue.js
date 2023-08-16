import axios from "axios";
import { useEffect, useState } from "react";

const Revenue = () => {

  const [revenue,setRevenue] = useState([]);
  
  // Storing url
  const apiUrl = 'http://localhost:5000';

  const token = JSON.parse(localStorage.getItem('token')).split(" ")[1];

  // Securing via token authentication in header
  const authAxios = axios.create({

    baseURL: apiUrl,
    headers: {
      Authorization: `dipper ${token}`,
    },

  })


  const totalRevenues = async()=>{

    // Fetching via secure route from backend.
    let totrev = await authAxios.get(`${apiUrl}/totalRevenues`);

    // Storing info in useState function mentioned above for setRevenue().
    setRevenue(totrev.data);


    console.log(totrev.data);

  }


  useEffect(() => {
    return () => {
    totalRevenues();
    };
  },[])
  

  return (
    <>
    {/* Getting all data via map function */}
    {revenue.map((revenue,index)=>{
      return(
      <div key={index} className='text-center h3 pt-4'>TODAY'S REVENUE IS {revenue.totalsum}</div>
      )
    })}
    </>
    )
}
export default Revenue