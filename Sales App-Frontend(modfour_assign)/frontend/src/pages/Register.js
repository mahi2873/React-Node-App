const Register = () => {

  return (
    <>
{/* Register Form Design */}
<div className="register-container d-flex flex-column align-items-center">

<div className="register-heading text-center h4 my-3">
  REGISTER
</div>

<div className="register-content">

  <div className="input-control">
    <label htmlFor="">First Name</label>
    <input type="text" className="form-control" />
  </div>
  <div className="input-control">
    <label htmlFor="">Last Name</label>
    <input type="text" className="form-control" />
  </div>
  <div className="input-control">
    <label htmlFor="">Email</label>
    <input type="text" className="form-control" />
  </div>
  <div className="input-control">
    <label htmlFor="">Password</label>
    <input type="text" className="form-control" />
  </div>
    <button className="btn btn-primary w-100 my-3">Register</button>
</div>

</div>

    </>
  )
}
export default Register