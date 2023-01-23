import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
const ImageslickSlider = ({imgArry}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <Slider   {...settings}>
            {imgArry.map((img, index) => (
                <div key={index}>
                    <Image 
                    layout='fill'
                    src={img}
                    />
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default ImageslickSlider