import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
 

const RoomCarousel = ({imgArry}) => {
    // const imgArry=[
    //     "https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
    //     "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //     "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    //     "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    //     "https://images.unsplash.com/photo-1567197427669-a0d3603a3586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    //     "https://images.unsplash.com/photo-1559741033-d85618ce7e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
    // ]
  return (
    < >
                <Carousel
                  showThumbs={false}
                  className='w-full h-full -z-10'
                  autoPlay={true}
                  interval={3000}
                  infiniteLoop={true}
                  showStatus={false}    
                  showArrows={false}
                  >
                     {
                            imgArry.map((item,index)=>(
                                <div className='w-full h-96 md:h-fit relative' key={index}>
                                 <img
                                layout='fill'
                                src={item.url}
                                key={index}
                                loading='eager'
                                placeholder='blur'
                                blurDataURL='https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80'
                                />                         
                               </div>
                            ))
                     }
                  </Carousel> 
    </>
  )
}

export default RoomCarousel