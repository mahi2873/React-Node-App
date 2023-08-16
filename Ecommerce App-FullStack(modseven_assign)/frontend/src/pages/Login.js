import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";


const Login = () => {

const [email,setEmail] = useState();
const [password,setPassword] = useState();
const navigate = useNavigate();

const handleLogin = async(e) =>{

    e.preventDefault();

    console.log(email,password);
    let result = await fetch('http://localhost:5000/login',{

     method: 'POST',
     body: JSON.stringify({email,password}),
     headers: {
      
      "Content-Type": "application/json"
    
    }

   })  
     result = await result.json();  

   if(result.auth){

      localStorage.setItem('user',JSON.stringify(result.user));
      localStorage.setItem('token',JSON.stringify(result.auth));
      navigate('/');
   }
   else{

    navigate('/login');

   }



}

  return (
    <>

<div className="login-container">

    <div className="row py-2 login-form">
    <div className="col text-center h3">Login</div>
    <div className="col-12">
        <input type="email" className="form-control w-100" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    </div>
    <div className="col-12">
        <input type="password" className="form-control w-100" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <div className="col-12 text-center">
        <button className="btn btn-warning w-50 fs-5" onClick={handleLogin}>Login</button>
    </div>
    <span className="text-center">Don't have an account?<Link to="/register">Register Here</Link></span>
    </div>
</div>

    </>
  )
}
export default Login