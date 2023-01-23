import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

const FacilitiesCard = ({facilities}) => {
  return (
    <div className='bg-gradient-to-t from-teal-100 to-text' >
        <img      
        src= {facilities.url ? facilities.url : 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'}
        alt='facilities'
        layout='fill'
        className='w-[100%] h-[200px] md:h-[240px] object-cover hover:opacity-80 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-95 mb-2 '
        
        />
        <h6 className='text-center text-text font-bold py-2 cursor-pointer' style={{letterSpacing:'2px'}}>{facilities.name ?? 'Swiming Pool'}</h6>
         
          {/* {
            facilities.description ?  ( <span className=''>
                <IoIosArrowForward />
              </span>
              <p>{facilities.description}</p>
            ) :
             ''
          } */}
          <div className='flex flex-col items-start justify-start '>
               {
                    facilities.description?.map((item, index) =>(
                     <div className='flex items-center  footer-li'>
                      <span className=''>
                        <IoIosArrowForward />
                      </span>
                        <p className='text-gray text-sm font-bold cursor-pointer hover:underline hover:text-text'>{`${item}`}</p>
                     </div>
                     )
                    )
               }
          </div>
        
    </div>
  )
}

export default FacilitiesCard