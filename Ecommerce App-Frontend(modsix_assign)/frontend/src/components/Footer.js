import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      
      {/* <!-- Footer Design --> */}
<div className="container-fluid footer bg-dark">

<div className="row justify-content-evenly text-center pt-5 text-white">

    <div className="col-md-3 pb-2">
        <h5>Women</h5>
        <p>
            <Link className="text-light text-decoration-none" to="/womenDresses">Dresses</Link><br/>
            <Link className="text-light text-decoration-none" to="/womenPants">Pants</Link><br/>
            <Link className="text-light text-decoration-none" to="/womenSkirts">Skirts</Link><br/>
        </p>
    </div>
    <div className="col-md-3 pb-2">

        <h5>Men</h5>
        <p>
            <Link className="text-light text-decoration-none" to="/menShirts">Shirts</Link><br/>
            <Link className="text-light text-decoration-none" to="/menHoodies">Hoodies</Link><br/>
            <Link className="text-light text-decoration-none" to="/menPants">Pants</Link><br/>
            <Link className="text-light text-decoration-none" to="/menShorts">Shorts</Link><br/>
        </p>

    </div>
    <div className="col-md-3 pb-2">

        <h5><Link className="text-light text-decoration-none" to="/kids">Kids</Link></h5>

    </div>
    <div className="col-md-3 pb-2">

        <h5>Links</h5>
        <p>
            <Link className="text-light text-decoration-none" to="/index.html">Home</Link><br/>
            <Link className="text-light text-decoration-none" to="/pages/login_page.html">Login</Link><br/>
            <Link className="text-light text-decoration-none" to="/pages/contact_page.html">Contact</Link><br/>
        </p>

    </div>

    <div className="col-11">
        <hr/>
    </div>
    
    {/* <!-- copyright --> */}
    <div className="col-12 pb-4">
    Copyright ©Ecommerce 2022-23
    </div>

    </div>

</div>


    </>
  )
}
export default Footer