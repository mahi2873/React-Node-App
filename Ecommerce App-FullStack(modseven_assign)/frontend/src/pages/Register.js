import { useState } from "react"
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"

const Register = () => {


    const [name,setName] = useState([]);
    const [email,setEmail] = useState([]);
    const [password,setPassword] = useState([]);
    const [cpass,setCpass] = useState([]);
    const navigate = useNavigate();

    const handleRegister = async() => {

        const userData = {

            name:name,
            email:email,
            password:password

        }

        if(password !== cpass || !name || !email){

        console.log("Incorrect credentials");

        }else{


            let result = await fetch('http://localhost:5000/signup',{

       method: 'POST',
       mode: 'cors',
       body: JSON.stringify(userData),
       headers: {"Content-Type": "application/json"}

     })

      result = await result.json(); 

      if(result){

        navigate('/');

      }

     console.log(result);
     
      localStorage.setItem('user',JSON.stringify(result.userdata));
      localStorage.setItem('token',JSON.stringify(result.auth));

     }

        


    }


  return (
    <>

<div className="register-container">

<div className="row py-2 register-form">
<div className="col text-center h3">Register</div>
<div className="col-12">
    <input type="text" className="form-control w-100" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
</div>
<div className="col-12">
    <input type="email" className="form-control w-100" placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
</div>
<div className="col-12">
    <input type="password" className="form-control w-100" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
</div>
<div className="col-12">
    <input type="password" className="form-control w-100" placeholder="Confirm Password" value={cpass} onChange={(e)=>{setCpass(e.target.value)}} />
</div>

<div className="col-12 text-center">
    <button className="btn btn-warning w-50 fs-5" onClick={handleRegister}>Register</button>
</div>
<span className="text-center">Already have an account?<Link to="/login">Login Here</Link></span>
</div>
</div>

    </>
  )
}
export default Register