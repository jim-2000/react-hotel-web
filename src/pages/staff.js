import React from 'react'
import HeroSection from '../components/common/Hero'
import OfferCard  from '../components/offers/offerCard'

const Staff = () => {
  return (
    <div>
        <HeroSection
        Title={"OUR STAFF"}
        subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        />
         <div className='container py-3 md:py-5 '>               
           <h1 className='text-center section-title'><span>OUR</span>STAFF</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 md:gap-y-5 gap-x-4'>
              {
                    [1,2,3,4,5,6,7,8,9].map((item, index) => { 
                      return (
                        <OfferCard  key={index}/>
                      )
                    })
               }  
               </div>         
          </div>
    </div>
  )
}

export default Staff