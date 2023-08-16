import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation, HashNavigation, Mousewheel} from "swiper";
import Card from "./Card";
import imageone from "../assets/images/contact_image/contact_photo.jpg"

const CardSlide = () => {
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
        <SwiperSlide> 
        <Card
          imgsrc={imageone}
        /> </SwiperSlide>

        <SwiperSlide> 
        <Card
          imgsrc={imageone}
        /> </SwiperSlide>

        <SwiperSlide> 
        <Card
          imgsrc={imageone}
        /> </SwiperSlide>

<SwiperSlide> 
        <Card
          imgsrc={imageone}
        /> </SwiperSlide>

<SwiperSlide> 
        <Card
          imgsrc={imageone}
        /> </SwiperSlide>

<SwiperSlide> 
        <Card
          imgsrc={imageone}
        /> </SwiperSlide>

<SwiperSlide> 
        <Card
          imgsrc={imageone}
        /> </SwiperSlide>

<SwiperSlide> 
        <Card
          imgsrc={imageone}
        /> </SwiperSlide>

<SwiperSlide> 
        <Card
          imgsrc={imageone}
        /> </SwiperSlide>

<SwiperSlide> 
        <Card
          imgsrc={imageone}
        /> </SwiperSlide>

      </Swiper>

    </>
  )
}

export default CardSlide;