// import { useState } from "react"
import { Link } from "react-router-dom"
// import {useNavigate} from "react-router-dom"

const Register = () => {



  return (
    <>

<div className="register-container">

{/* Register Form starts here */}
<div className="row py-2 register-form">
<div className="col text-center h3">Register</div>
<div className="col-12">
    <input type="text" className="form-control w-100" placeholder="Enter Name" />
</div>
<div className="col-12">
    <input type="email" className="form-control w-100" placeholder="Enter Email"/>
</div>
<div className="col-12">
    <input type="password" className="form-control w-100" placeholder="Password" />
</div>
<div className="col-12">
    <input type="password" className="form-control w-100" placeholder="Confirm Password" />
</div>

<div className="col-12 text-center">
    <button className="btn btn-warning w-50 fs-5">Register</button>
</div>
<span className="text-center">Already have an account?<Link to="/login">Login Here</Link></span>
</div>
{/* Register Form ends here */}

</div>

    </>
  )
}
export default Register