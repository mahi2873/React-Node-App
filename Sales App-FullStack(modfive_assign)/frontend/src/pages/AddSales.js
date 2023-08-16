import axios from "axios"
import {useState} from "react";

const AddSales = () => {

  const [name,setName] = useState('');
  const [quantity,setQuantity] = useState('');
  const [amount,setAmount] = useState('');



 const addProduct = ()=>{

  console.log(name,quantity,amount);

  let response = axios.post('http://localhost:5000/addProduct',{name:name,quantity:quantity,amount:amount});

  if(response){

    console.log('Successfuly Product Added!');

  }

 }


  return (
    <>

      <div className="addSalesContainer">

        <div className="heading my-3">
          ADD SALES ENTRY
        </div>

        <div className="input-content">

        <div className="input-control">

        <label htmlFor="">Product Name</label>
        <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>

        </div>

        <div className="input-control">

        <label htmlFor="">Quantity</label>
        <input type="text" className='form-control' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />

        </div>

        <div className="input-control">

        <label htmlFor="">Amount</label>
        <input type="text" className='form-control' value={amount} onChange={(e)=>setAmount(e.target.value)}/>

        </div>

        <button className='btn btn-primary w-100 my-3' onClick={addProduct}>Submit</button>

        </div>

      </div>

    </>
  )
}
export default AddSales