import React from 'react'
 
import HeroSection from '../components/common/Hero'
import SpecialOffer from '../components/offers/specialOffer'
import { useNavigate } from 'react-router-dom'

const Villas = () => {
  const navigate = useNavigate()
  return (
    <div className=''>
    
        <HeroSection 
        Title={"Our Villas"}
        subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        imgcls={'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
        />
      
        <div className='container py-3 md:py-5 flex flex-col items-center justify-center '>
           <h1 className='text-center section-title'><span>Our</span>vilas</h1>
             <h1 className='text-center'>sorry<span>Villas</span> are Unavalable Now </h1>
            {/* {
              [1,2,3,4,5,6].map((item, index) => (
                <>
                  <SpecialOffer 
                  key={index}
                    Title={"10% off on all services"}
                    subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    // imgcls={item %2 !=0 ? 'bg-room': 'bg-offer'}
                    imgcls={'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
                    css={'h-[20rem]  md:h-64 flex flex-col justify-center items-center my-3 rounded-md '}
                    anyComponent={
                      <>
                        <button className='btn btn-primary-outline uppercase transition duration-75 ease-in-out
                         hover:text-white hover:tracking-[1px]'
                         onClick={()=>navigate('/booking')}
                         >Book Now</button>
                      </>              
                    }
                    isright={item %2 !=0 ? true: false}
         
            />
                </>
              ))
            } */}
        </div>
      
    </div>
  )
}

export default Villas