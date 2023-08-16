import { Link, } from "react-router-dom"


const Navbar = () => {


  return (
    <>

{/* Navbar Design */}
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">SALES APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/addSales">ADD SALES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/topFiveSales">TOP 5 SALES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/totalRevenue">TODAY'S TOTAL REVENUE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">LOGOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">REGISTER</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
export default Navbar