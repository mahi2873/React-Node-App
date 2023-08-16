import { Link } from "react-router-dom"
import Ratings from "./Ratings"

const ProductCard = (props) => {

  return (
    <>

<div className="cardContent d-flex justify-content-center">
  <div className="card my-3" style={{width:"15rem"}}>
    <img src={props.imgProd} className="card-img-top" alt="..." style={{height:"50vh"}}/>
    <div className="card-body">
    <h5 className="card-title text-secondary">{props.brand}</h5>
    <p className="card-text fs-5">{props.name}</p>
    <h5 className="mb-4">{props.price}</h5>
    <Ratings
      ratings = "4"
    />
    <Link to="#" className="btn btn-warning w-100 fw-bold">Add to Cart <i class="fa-solid fa-cart-shopping"></i></Link>
    </div>
  </div>
</div>

    </>
  )
}
export default ProductCard