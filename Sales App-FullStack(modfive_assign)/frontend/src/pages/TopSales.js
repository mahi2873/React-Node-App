import {useEffect, useState} from "react";
import axios from "axios";

const TopSales = () => {

  const [products,setProducts] = useState([]);

  // Storing URL
  const apiUrl = 'http://localhost:5000';

  const token = JSON.parse(localStorage.getItem('token')).split(" ")[1];

  // Storing headers info for authentication
  const authAxios = axios.create({

    baseURL: apiUrl,
    headers: {
      Authorization: `dipper ${token}`,
    },

  })

  const getProducts = async()=>{

    // Aithenticating and fetching product from secure route or api.
    let productlist = await authAxios.get(`${apiUrl}/getProduct`);


    setProducts(productlist.data.products);


    console.log(productlist.data.products);

  }

  useEffect(() => {
    return () => {
    getProducts();
    };
  },[])


  return (
    <>
    
    <div className="sales-container d-flex flex-column justify-content-center align-items-center">

    <div className="sales-heading text-center h3 my-3">
      TOP 5 SALES
    </div>

    <div className="sales-table my-4">

    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Sales Id:</th>
      <th scope="col">Product Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Sale Amount</th>
    </tr>
  </thead>
  <tbody>
    {products.map((items,index)=>{
    return(
      <tr key={index}>
      <th scope="row">{items.id}</th>
      <td>{items.salesid}</td>
      <td>{items.name}</td>
      <td>{items.quantity}</td>
      <td>{items.amount}</td>
      </tr>
    )})
    }
  </tbody>
</table>

    </div>

    </div>

    </>
  )
}
export default TopSales