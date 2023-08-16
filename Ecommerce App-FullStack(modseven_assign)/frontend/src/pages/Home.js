import CardSlide from "../components/CardSlide"
import Tag from "../components/Tag"

const Home = () => {
  return (
    <>

    <div className="container-fluid" id="bg">

    <Tag/>

    </div>

    <div className="featured text-center">

    <div className="featureTitle h2 my-2">
        Featured Products
    </div>

    <CardSlide/>

    </div>

    </>
  )
}
export default Home