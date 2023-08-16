import React, { useEffect, useState } from "react";


const CartComp = () => {

    const [data, setData] = useState([]);
    const [quant, setQuant] = useState([]);
    // const [increment,setIncrement] = useState([]);

    const id = JSON.parse(localStorage.getItem('user')).id;
    const token = JSON.parse(localStorage.getItem('token'))


    const value = "";
    // const userid = id?user=userid:user=0


    console.log(token);

    // console.log(user);

    const fetchCartProducts = async()=>{


        let result = await fetch(`http://localhost:5000/cartProduct/${id}`,{

            method:"GET",
            headers: {
                
                "Content-Type":"application/json",
                "authorization": `${JSON.parse(localStorage.getItem('token'))}`
                
            }


        });

        result = await result.json();
        setData(result); 
        console.log(result);


    } 



    useEffect(() => {
      return () => {
        fetchCartProducts();
      };

    },[value])


    const handleDecrement = (e)=>{

        e.preventDefault();

        var num = quant;

        if(quant > 0)
        {
        setQuant(num-1)
        }
        else{



        }

    }

    const handleIncrement = (e)=>{

        e.preventDefault();

        var num = quant;

        if(quant >= 0){

            setQuant(num+1);

        }

    }

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
                    <td><img src={curr.imageUrl} alt="" style={{height:"40px"}} /> {curr.productname}</td>
                    <td>${curr.price}</td>
                    <td>
                     <span className="d-flex flex-row justify-content-center"> <button key={index} className="btn btn-primary px-3 mx-2" onClick={handleDecrement}>-</button>  <input key={index} type="number" class="form-control w-25" value={quant} onChange={(e)=>setQuant(e.target.value)}/> <button className="btn btn-primary px-3 mx-2" onClick={handleIncrement}>+</button></span>
                    </td>
                    <td>${curr.price * quant}</td>
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
            <button class="btn btn-primary">Checkout</button>
        </div>
    </div>

    </>
  )
}
export default CartComp