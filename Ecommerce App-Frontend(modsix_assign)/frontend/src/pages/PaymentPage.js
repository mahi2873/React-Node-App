
const PaymentPage = () => {
  return (
    <>

        <div className="container d-flex justify-content-center my-4">

        
        <div className="card">

            {/* heading for order summary*/}
            <div className="card"> 
            <h3 className="text-center">Order Summary</h3>
            </div>

            <div className="card-body">
                
            <div className="row my-3">

                <div className="col text-start">
                    <h4>Name</h4>
                    <ul style={{position:"relative",right:"30px" ,listStyleType:"none"}}>
                        <li className="h6">Dress One</li>
                        <li className="h6">Dress Two</li>
                        <li className="h6">Dress Three</li>
                        <li className="h6">Dress Four</li>
                    </ul>

                </div>
                <div className="col text-end">
                    
                    <div className="mb-3">
                    <h4>Total</h4>
                    <h5>$200</h5>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <h5>Shipping Fee</h5>
                            <h6>$0</h6>
                        </div>
                    </div>

                </div>

            </div>
            
            {/* Look of payment button */}
            <button className="btn btn-primary w-100"><i class="fa-brands fa-paypal"></i> PayNow</button>

            </div>


        </div>


        </div>

    </>
  )
}
export default PaymentPage