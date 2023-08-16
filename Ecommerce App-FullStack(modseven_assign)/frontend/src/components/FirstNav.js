import { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";

const FirstNav = () => {

  const [quantity,setQuantity] = useState([]);

  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  
  const logout = ()=>{
  // After logout clear the localstorage and navigate to register page.
    localStorage.clear();
    navigate('/register');
  
  }

  // Fetching Quantity of Cart.
  const fetchCartQuantity = async()=>{

    let result = await fetch(`http://localhost:5000/cartQuantity/${user.id}`,{

      method:"GET",
      headers:{"Content-Type":"application/json"}


    })

    result = await result.json();
    setQuantity(result);
    console.log(result);


  }

  useEffect(() => {
    return () => {
      fetchCartQuantity();
    };
  }, )
  

  return (
    <>
    {/* First Navbar Component */}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand w-25 logo-title" to='#'> <h3>Ecommerce</h3> </Link>    

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

    <span className="navbar-toggler-icon"></span>

    </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav mx-auto w-50">
        <li className="nav-item w-100">

        <form className="d-flex my-3" role="search">
          <input className="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-light w-50" type="submit">Search</button>
        </form>
        </li>
        </ul>
        <div className="mx-2">

      {auth? <div className="row text-center">

      <div className="col-12 col-sm-4 my-2">
            <Link className="text-white mx-1 px-1 text-decoration-none fst-italic" to="">({user.name})</Link>
        </div>

        <div className="col-12 col-sm-4 my-2">
          <Link className="btn btn-warning mx-1 px-4" to="/logout" onClick={logout}>Logout</Link>
        </div>
          
        <div className="col-12 col-sm-4 my-2">
            
            <Link className="btn btn-warning mx-1 px-4" to="/addToCart">Cart({quantity})</Link>
        </div>

        </div>
        :
        <div className="row text-center">

            <div className="col-12 col-sm-4 my-2">
            <Link className="btn btn-warning mx-1 px-4" to="/login">Login</Link>
            </div>
            <div className="col-12 col-sm-4 my-2">
            <Link className="btn btn-warning mx-1 px-4" to="/register">Register</Link>
            </div>
            <div className="col-12 col-sm-4 my-2">
            <Link className="btn btn-warning mx-1 px-4" to="/cartLogin">Cart(0)</Link>
            </div>
        </div>
      } 
        </div>

      </div>

  </div>
</nav>

    </>
  )
}
export default FirstNav;