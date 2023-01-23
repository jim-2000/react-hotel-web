import React from 'react'
import Slider from "react-slick";

const SmallImgslides = ({data}) => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        centerPadding: "60px",
        dots: false,
        focusOnSelect:true,
        infinite: true,
        speed: 500,
        width:600,
        height:400,
        slidesToShow: 3,
        slidesToScroll: 1,
 
         
      };
      

  return (
    <div className=''>
        <Slider
            {...settings}
            >
            {
                    data.map((item) =>  smallimgshow(item.url))
            }
        </Slider>
    </div>
  )
}

const smallimgshow= (img)=>{
    return (
        <div className='w-full h-full' key={img}>
            <img src={img} alt="img" className='rounded-sm object-cover w-fit max-h-full -mx-8' />
        </div>
    );

}

export default SmallImgslides