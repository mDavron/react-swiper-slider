// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation,Lazy } from "swiper";
import {data} from './mocData'

export default function App() {
  return (
    <div className="wrap">
      <Swiper
        spaceBetween={30}
        loop={true}
        lazy={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
         
        }}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation,Lazy]}
        className="mySwiper"
      >
        {data.map((item,index)=> {
          return (
            <SwiperSlide key={index}>
              <img src={item.url} alt={item.alt} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
}