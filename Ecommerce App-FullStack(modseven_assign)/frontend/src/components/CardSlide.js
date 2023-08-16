import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation, HashNavigation, Mousewheel} from "swiper";
import Card from "./Card";
import { useEffect, useState } from "react";

const CardSlide = () => {

  const [data,setData] = useState([]);

  let fetchProducts = ()=>{


    fetch('http://localhost:5000/getProducts',
    
    {
    method:"GET",
    mode: "cors", 
    headers: {

        accept: "application/json",
        "Access-Control-Allow-Origin": "*"
        
    }
    }
    
    )
    .then((result) => result.json())
    .then((data)=>{
        setData(data);
        // console.log(data);
    }).catch(err=>{
    
        if(err){
            console.log("")
        }

    })   


}

console.log(data);


useEffect(() => {
  return () => {
    fetchProducts();
  };
}, [])



  return (
    <>

<Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={8}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        mousewheel={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation, HashNavigation, Mousewheel]}
        className="mySwiper pb-3 px-3 mx-2"
      >
        {data.map((curr,index)=>{
          return(

        <SwiperSlide> 
        <Card
          name = {curr.name}
          brand = {curr.brand}
          price = {curr.price}
          imgsrc={curr.url}
        /> </SwiperSlide>

            )
        })}
        
      </Swiper>

    </>
  )
}

export default CardSlide;