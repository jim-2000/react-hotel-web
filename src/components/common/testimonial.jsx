import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

 

// import required modules
import { Navigation } from "swiper";
import TestimonalItem from "./testimonalItem";

export default function Testimonial() {
  return (
    <>
    
      <Swiper 
            navigation={true} modules={[Navigation]} 
            loop={true}
            loopFillGroupWithBlank={true}
            className="mySwiper"
      >
        {
          [1,2,3,4,5,6,7,8,9,10].map((item, index) => (
            <SwiperSlide index={index}>
              <TestimonalItem  key={index}/>
            </SwiperSlide>
          ))
        }
         
      </Swiper>
    </>
  );
}
