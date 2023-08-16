import {Link} from "react-router-dom";


const Login = () => {


  return (
    <>

<div className="login-container">

  {/* Login Form starts here */}
    <div className="row py-2 login-form">
    <div className="col text-center h3">Login</div>
    <div className="col-12">
        <input type="email" className="form-control w-100" placeholder="Email" />
    </div>
    <div className="col-12">
        <input type="password" className="form-control w-100" placeholder="Password" />
    </div>
    <div className="col-12 text-center">
        <button className="btn btn-warning w-50 fs-5" >Login</button>
    </div>
    <span className="text-center">Don't have an account?<Link to="/register">Register Here</Link></span>
    </div>
    {/* Login Form ends here */}
</div>

    </>
  )
}
export default Login