import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {

const auth = localStorage.getItem('user');
const navigate = useNavigate();
const user = JSON.parse(localStorage.getItem('user'));

const logout = ()=>{

  localStorage.clear();
  navigate('/register');

}



  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">SALES APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    {auth?
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
          <Link className="nav-link" to="/logout" onClick={logout}>LOGOUT ({user.firstname})</Link>
        </li>
      </ul>
      :
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="nav-link" to="/login">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">REGISTER</Link>
        </li>
      </ul>
  }
    </div>
  </div>
</nav>

    </>
  )
}
export default Navbar