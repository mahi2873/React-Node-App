import {Link} from "react-router-dom";

const Cart = () => {
  return (
    <>
<div className="cartbody">
<h1 className="my-4">Shopping Cart</h1>
<div className="card">
  <div className="card-body">
    
    Please <Link to="/login">Login</Link> to see your items in the cart.

  </div>
</div> 
</div>
    </>
  )
}
export default Cart