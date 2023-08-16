import {Link} from "react-router-dom";

const FirstNav = () => {

 //Just flip the value of *auth* to test the buttons in main navbar UI.

// const auth = 1;
const auth = 0;

  return (
    <>
    
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

    {/* Actions for flipping the buttons starts here */}
      {auth? <div className="row text-center">

      <div className="col-12 col-sm-4 my-2">
            <Link className="text-white mx-1 px-1 text-decoration-none fst-italic" to="">(Username)</Link>
        </div>

        <div className="col-12 col-sm-4 my-2">
          <Link className="btn btn-warning mx-1 px-4" to="/logout">Logout</Link>
        </div>
          
        <div className="col-12 col-sm-4 my-2">
            
            <Link className="btn btn-warning mx-1 px-4" to="/addToCart"><i class="fa-solid fa-cart-shopping fs-5"></i>(5)</Link>
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
            <Link className="btn btn-warning mx-1 px-4" to="/cartLogin"><i class="fa-solid fa-cart-shopping fs-5"></i>(0)</Link>
            </div>
        </div>
      } 
      {/* Actions for flipping the buttons ends here */}
        </div>

      </div>

  </div>
</nav>

    </>
  )
}
export default FirstNav;