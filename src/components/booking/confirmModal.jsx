import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useBooking } from '../../context/DataContex';
//
import Bookingdetails from './bookingdetails'
import Pricedetails from './pricedetails';



const ConfirmModal = () => {
    const { booking, setBooking } = useBooking()
    useEffect(() => {
        // re render the component
        setBooking({ ...booking })
    })

  return (
    <div>
            <div className='shadow-xl px-1 py-3 border-2 border-text  w-full space-y-1'>
                <p>Your booking details</p>
                <Bookingdetails />
                <p>Total length of stay:</p>
                <p>{booking.nights} Night</p>     
                <hr className='divide-x-2 mt-1'/>     
                <div className='py-2  space-y-1'>
                    <p>You selected:</p>
                    <p>Standard Double Room</p> 
                </div>   
                <>
                    {
                        booking.needAcar ? (<p className='p-2 bg-text text-main font-bold' >We will send you a Audi v8</p>) : null
                    }
                        {
                        booking.work ? (<p className='p-2 bg-text text-main font-bold' >We will have Extra feacher for you</p>) : null
                    }
                </>
                <hr className='divide-x-2 mt-1'/>     
                    <Pricedetails />
                <button className='bg-main text-white py-2 px-4 w-full text-center rounded-md'
                onClick={()=>{
                console.log(booking);         
                }}
      >Book Now</button>

            </div>
    </div>
  )
}

export default ConfirmModal