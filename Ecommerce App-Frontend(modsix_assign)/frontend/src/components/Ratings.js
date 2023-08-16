const Ratings = (props) => {
  return (
    <>
    
      <div className="rating h5 bg-success rounded-4 px-2 py-1"> <span className="d-flex justify-content-between text-white">{props.ratings} <i class="fa-solid fa-star text-warning"></i></span> </div>

    </>
  )
}
export default Ratings