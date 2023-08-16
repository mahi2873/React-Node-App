import { Link } from "react-router-dom"

const SecondNav = () => {
  return (
    <>

     <ul className="nav justify-content-center mx-2">

     <li className="nav-item">
         <Link className="nav-link text-dark" to="/">Home</Link>
       </li>

      <li className="nav-item">
         <Link className="nav-link text-dark" to="/allProducts">All Products</Link>
       </li>
       
       <li className="nav-item dropdown">
       
        <Link className="nav-link dropdown-toggle text-dark" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Women
        </Link>
      
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/allWomen">All Women Products</Link></li>
          <li><Link className="dropdown-item" to="/womenDresses">Dresses</Link></li>
          <li><Link className="dropdown-item" to="/womenPants">Pants</Link></li>
          <li><Link className="dropdown-item" to="/womenSkirts">Skirts</Link></li>
        </ul>

       </li>
       
       <li className="nav-item dropdown">
       
        <Link className="nav-link dropdown-toggle text-dark" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Men
        </Link>
      
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/allMen">All Men Products</Link></li>
          <li><Link className="dropdown-item" to="/menShirts">Shirts</Link></li>
          <li><Link className="dropdown-item" to="/menHoodies">Hoodies</Link></li>
          <li><Link className="dropdown-item" to="/menPants">Pants</Link></li>
          <li><Link className="dropdown-item" to="/menShorts">Shorts</Link></li>
        </ul>
        
       </li>

       <li className="nav-item">
         <Link className="nav-link text-dark" to="/kids">Kids</Link>
       </li>

       <li className="nav-item">
         <Link className="nav-link text-dark" to="/contacts">Contact</Link>
       </li>

     </ul>

    </>
  )
}
export default SecondNav