// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { data } from "./mocData";

export default function App() {
  return (
    <div className="_wrapper">
      <h1 style={{ textAlign: "center" }}>Swiper Slider</h1>
      <Swiper
        // spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}

        keyboard={{
          enabled: true,
        }}

        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => {
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
