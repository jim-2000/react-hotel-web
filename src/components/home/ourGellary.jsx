import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

 

// import required modules
import { Pagination, Navigation } from "swiper";
 

//
const OurGellary = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
     
        loop={true}
        loopFillGroupWithBlank={true}       
        navigation={true}
        modules={[ Navigation]}
        className="h-64 w-full md:h-96  "
      >
         {
          [1,2,3,4,5,6,7,8,9,10].map((item, index) => (
            <SwiperSlide className="ourGellary" key={index}>
            
              <img
              layout="h-full w-full absolute inset-0"
              src="/imgs/vila.jpg"
              className="object-cover"
              alt="villa"
              />
             
              
            </SwiperSlide>
          ))
        }
         
       
        
      </Swiper>
    </>
  )
}

export default OurGellary