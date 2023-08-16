import {Link} from "react-router-dom";

const Card = (props) => {
  return (
    <>
<div className="cardContent d-flex justify-content-center">
  <div className="card my-3" style={{width:"18rem"}}>
    <img src={props.imgsrc} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="#" className="btn btn-warning">Add to Cart <i class="fa-solid fa-cart-shopping"></i></Link>
    </div>
  </div>
</div>
    </>
  )
}
export default Card