import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Register = () => {

  const [firstname,setFirstName] = useState('');
  const [lastname,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async()=>{


    // console.log(firstname,lastname,email,password);

    if(!firstname || !lastname || !email || !password){

      // Displaying alert in browser.
      alert('Please fill your credentials')
      console.log('Please fill your credentials');

    }

    // Fetching and Storing info via axios in a response keyword 
    let response = await axios.post('http://localhost:5000/signup',{firstname,lastname,email,password})


    if(response){

      console.log(response.data.userdata.firstname);

      // Setting user info and token after registration
      localStorage.setItem('user',JSON.stringify(response.data.userdata));
      localStorage.setItem('token',JSON.stringify(response.data.auth));

      // Getting registered user info and token
      let user = JSON.parse(localStorage.getItem('user')).firstname;
      let token = JSON.parse(localStorage.getItem('token'));

      // navigating to main page
      navigate('/');

      // Displaying user info and token in browser
      console.log('User: '+user)
      console.log('Token: '+token)

    }

    

  }

  return (
    <>

<div className="register-container d-flex flex-column align-items-center">

<div className="register-heading text-center h4 my-3">
  REGISTER
</div>

<div className="register-content">

  <div className="input-control">
    <label htmlFor="">First Name</label>
    <input type="text" className="form-control" value={firstname} onChange={(e)=>setFirstName(e.target.value)} />
  </div>
  <div className="input-control">
    <label htmlFor="">Last Name</label>
    <input type="text" className="form-control" value={lastname} onChange={(e)=>setLastName(e.target.value)} />
  </div>
  <div className="input-control">
    <label htmlFor="">Email</label>
    <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </div>
  <div className="input-control">
    <label htmlFor="">Password</label>
    <input type="text" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>
    <button className="btn btn-primary w-100 my-3" onClick={handleSubmit}>Register</button>
</div>

</div>

    </>
  )
}
export default Register