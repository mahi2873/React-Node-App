import { useState } from "react";
import {Link} from "react-router-dom";

const Card = (props) => {

  const [name,setName] = useState(props.name);
  const [url,setUrl] = useState(props.imgsrc);
  const [price,setPrice] = useState(props.price);
  const userid = JSON.parse(localStorage.getItem('user'));

  //Handle Product to add in cart
 const handleProduct = async()=>{
  
  setName(props.name);
  setUrl(props.imgsrc);
  setPrice(props.price);

  const productinfo = {

    productname: name,
    imageUrl: url,
    price: price,
    addedBy: userid.id

  }
  
  // Displaying product info
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
  <div className="card my-3" style={{width:"18rem"}}>
    <img src={props.imgsrc} className="card-img-top" alt="..."style={{height:"40vh"}}/>
    <div className="card-body">
    <h5 className="card-title text-secondary">{props.brand}</h5>
    <p className="card-text fs-5">{props.name}</p>
    <h5>${props.price}</h5>
    <Link to="#" className="btn btn-warning" onClick={handleProduct}> Add to Cart <i class="fa-solid fa-cart-shopping"></i></Link>
    </div>
  </div>
</div>
    </>
  )
}
export default Card