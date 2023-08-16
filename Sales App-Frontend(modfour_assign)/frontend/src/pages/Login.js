const Login = () => {

  return (
    <>

    {/* Login Form Design */}
      <div className="login-container d-flex flex-column align-items-center">

        <div className="login-heading text-center h4 my-3">
          LOGIN
        </div>

        <div className="login-content">

          <div className="input-control">
            <label htmlFor="">Email</label>
            <input type="text" className="form-control" />
          </div>
          <div className="input-control">
            <label htmlFor="">Password</label>
            <input type="text" className="form-control" />
          </div>
            <button className="btn btn-primary w-100 my-3">Login</button>
        </div>

      </div>

    </>
  )
}
export default Login