import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Banner from "../components/common/banner"
import DetailsImages from "../components/common/gellarys/detailsImages"
import GridTwoLayout from "../components/common/gridTwoLayout"
import HeroSection from "../components/common/Hero"
import ReservForm from "../components/common/reservForm"
import AwsomeSlides from "../components/common/slides/awsomeSlides"
import SmallImgslides from "../components/common/slides/smallImgslides"
import Testimonial from "../components/common/testimonial"
import AboutHotel from "../components/home/aboutHotel"
import CountupClient from "../components/home/countup"
import GetInTouch from "../components/home/getInTouch"
import OurGellary from "../components/home/ourGellary"
import { getAllRoom } from "../redux/slice/roomSlice"
import { getHotel } from "../redux/slice/hotelSlice"
import { IoIosClose } from "react-icons/io"
const data = [
  {
      id: 1,
      title: 'title 1',
      subtitle: 'subtitle 1',
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
      id: 2,
      title: 'title 2',
      subtitle: 'subtitle 2',
      img: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
      id: 3,
      title: 'title 3',
      subtitle: 'subtitle 3',
      img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
      id: 4,
      title: 'title 4',
      subtitle: 'subtitle 4',
      img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  }

];

 
 

export default function Home() {
  const dispatch = useDispatch(); 
  const [isopen, setisopen] = useState(true);
  const {hotel} = useSelector((state)=>state.hotel)
  return (
  <div className=''>
    
      {/* Header alerts for 5 seconds */}
    <div className={`  bg-teal-300 ${isopen ? 'flex justify-between items-center' : 'hidden'} px-4`}>
             <p className='text-center text-base text-text'> <span className="text-xl text-red-500">30%</span> Discount For Crismas Vacation </p>
            <IoIosClose 
                style={{fontSize: '3rem', }}
                className='text-white cursor-pointer hover:text-text'
                onClick={ ()=>setisopen(false)}
            />
    </div>
   <div className=''>
    <HeroSection 
    Title={'Welcome to the new era of digital Five Star Hotel'}
    subtitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
    btnTitle={"Book Exclusive Villa's"}
    imgcls={'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}    
    otherComponent={
      <div className='container pt-3 pb-8'>
      {/* <ReservForm 
      css={'border-2 border-white text-white'}    
      /> */}
    </div>
    }
    />
   </div>
    {/* <div className='container pt-3'>
      <ReservForm />
    </div> */}
    <div
    className='container py-5'
    >
      <GridTwoLayout 
      firstLayout={<AboutHotel text={hotel?.description} />}
   
      SecondLayout={
        <AwsomeSlides  />
      }
      />
    </div>
    
    
    <div
    className='bg-white container'
    >
      <Banner 
      Title={"Events & Weddings"}
      subtitle={`
      Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. 
      `}
      imgcls={'https://images.unsplash.com/photo-1605128973890-f6daa80e3c8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
      />
    </div>

    <div className='container py-5 px-4'>
        <h1 className='text-center section-title'><span>Our</span>Galleries</h1>
        {/* <OurGellary /> */}
        {/* <AwsomeSlides /> */}
        <GridTwoLayout 
        css={'grid  md:grid-cols-[60%,40%] grid-cols-1 w-full gap-4 md:gap-4 flex-wrap'}
      firstLayout={ <AwsomeSlides photos={hotel?.photos ?? []} />}
  
      SecondLayout={
        <AboutHotel /> 
      }
      />
    </div>
    <div className='container py-5'>
       {/* <h1 className='text-center section-title'>CLIENT<span>STATICS</span></h1> */}
       <CountupClient />
    </div>
    <div className='container py-5'>
    <h1 className='text-center section-title'>CLIENT <span>Spech</span></h1>
        <Testimonial />
    </div>
    <div className='container py-5'>
    <h1 className='text-center section-title'>Insta <span>Moment</span></h1>
     <div>
         <SmallImgslides data={hotel?.photos ?? []} />
     </div>
    </div>
    <div>
      <GetInTouch />
    </div>
    <div className=''>
      {/* <Subscription /> */}
    </div>    
  </div> 
)

}
 