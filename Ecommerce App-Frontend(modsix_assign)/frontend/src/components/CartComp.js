import { useEffect, useState } from "react";
import Productdata from "../assets/data/products.json"
import { useNavigate } from "react-router-dom";


const CartComp = () => {

    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const handleCart = ()=>{

        //Navigating to payment page after the checkout
        navigate("/paymentpage");

    }


    useEffect(() => {
        return () => {
            // Storing product data in a useState Function
          setData(Productdata);
        };
      }, [])


  return (
    <>

<div class="container mt-5 my-3">
        <h1>Shopping Cart</h1>
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
        {data.map((curr,index)=>{

                    return(



                <tr key={index}>
                    <td><img src={curr.url} alt="" style={{height:"40px"}} /> {curr.productname}</td>
                    <td>${curr.price}</td>
                    <td key={index}>
                        <input type="number" min="1" max="10" class="form-control"/>
                    </td>
                    <td>${curr.price * 4}</td>
                    <td>
                        <button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button>
                    </td>
                </tr>

                )

            })}
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3" class="text-right">Total:</td>
                    <td>$30</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
        <div class="text-right">
            <button class="btn btn-primary" onClick={handleCart}>Checkout</button>
        </div>
    </div>

    </>
  )
}
export default CartComp