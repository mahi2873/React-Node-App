import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const navigate = useNavigate();

  const handleLogin = async()=>{

    console.log(email,password);

    // Fetching and Storing in a response keyword.
  let response = await axios.post('http://localhost:5000/login',{email,password})
    
  // Checking user info during login
  if(response.data.user && response.data.auth){

      console.log(response);

      // Setting user info in a browser local-storage
      localStorage.setItem('user',JSON.stringify(response.data.user));
      localStorage.setItem('token',JSON.stringify(response.data.auth));

      // Getting user info and token browser local-storage
      let user = JSON.parse(localStorage.getItem('user')).firstname;
      let token = JSON.parse(localStorage.getItem('token'));

      // navigating after successfull login
      navigate('/');
      console.log(user);
      console.log(token);

  }else{

    // If Login is not successful navigating back to login page
    navigate('/login');

  } 



  }


  return (
    <>

      <div className="login-container d-flex flex-column align-items-center">

        <div className="login-heading text-center h4 my-3">
          LOGIN
        </div>

        <div className="login-content">

          <div className="input-control">
            <label htmlFor="">Email</label>
            <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="input-control">
            <label htmlFor="">Password</label>
            <input type="text" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
            <button className="btn btn-primary w-100 my-3" onClick={handleLogin}>Login</button>
        </div>

      </div>

    </>
  )
}
export default Login