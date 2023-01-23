import React from 'react'
import { useBooking } from '../../context/DataContex'
import {format} from 'date-fns'
const Bookingdetails = () => {
  const { booking, setBooking } = useBooking()
  return (
    <div className='flex justify-between items-center space-y-2 '>
        <div className='flex flex-col space-y-1'>
            <p>Arrival</p>
            <p className='text-sm text-text'>{format(new Date(booking.checkIn), 'EEE-dd-MM')}</p>
            {/* <p>From 14:00</p>             */}
        </div>
        <hr />
        <div className='flex flex-col  space-y-1'>
            <p>Departure</p>
            <p className='text-sm text-text'>{format(new Date(booking.checkOut), 'EEE-dd-MM')}</p>
        </div>   
                        
    </div>
  )
}

export default Bookingdetails