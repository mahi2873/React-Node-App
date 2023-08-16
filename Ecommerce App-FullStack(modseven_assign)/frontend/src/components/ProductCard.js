import { Link } from "react-router-dom"
import Ratings from "./Ratings"
import { useState } from "react"

const ProductCard = (props) => {

  const [name,setName] = useState(props.name);
  const [url,setUrl] = useState(props.imgProd);
  const [price,setPrice] = useState(props.price);
  const userid = JSON.parse(localStorage.getItem('user'));

  //Handle Product to add in cart
 const handleProduct = async()=>{
  
  setName(props.name);
  setUrl(props.imgProd);
  setPrice(props.price);

  const productinfo = {

    productname: name,
    imageUrl: url,
    price: price,
    addedBy: userid.id

  }
  
  console.log(productinfo);
  
  let result = await fetch('http://localhost:5000/addCart',{

     method: 'POST',
     body: JSON.stringify({productname:name, imageUrl:url, price: price, addedBy:userid.id}),
     headers: {
      
      "Content-Type": "application/json"
    
    }

   })  
     result = await result.json();

     if(result){

      console.log(result);
      alert("Added the Item into Cart");

     }
     

 }

  return (
    <>

<div className="cardContent d-flex justify-content-center">
  <div className="card my-3" style={{width:"15rem"}}>
    <img src={props.imgProd} className="card-img-top" alt="..." style={{height:"40vh"}} />
    <div className="card-body">
    <h5 className="card-title text-secondary">{props.brand}</h5>
    <p className="card-text fs-5">{props.name}</p>
    <h5 className="mb-4">{props.price}</h5>
    <Ratings
      ratings = {props.rate}
    />
    <Link to="#" className="btn btn-warning w-100 fw-bold" onClick={handleProduct}>Add to Cart <i class="fa-solid fa-cart-shopping"></i></Link>
    </div>
  </div>
</div>

    </>
  )
}
export default ProductCard