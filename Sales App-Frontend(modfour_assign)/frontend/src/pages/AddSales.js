const AddSales = () => {


  return (
    <>

      {/* Sales Entry Design */}
      <div className="addSalesContainer">

        <div className="heading my-3">
          ADD SALES ENTRY
        </div>

        <div className="input-content">

        <div className="input-control">

        <label htmlFor="">Product Name</label>
        <input type="text" className='form-control'/>

        </div>

        <div className="input-control">

        <label htmlFor="">Quantity</label>
        <input type="text" className='form-control' />

        </div>

        <div className="input-control">

        <label htmlFor="">Amount</label>
        <input type="text" className='form-control'/>

        </div>

        <button className='btn btn-primary w-100 my-3'>Submit</button>

        </div>

      </div>

    </>
  )
}
export default AddSales