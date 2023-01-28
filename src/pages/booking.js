import React, { useEffect, useState } from 'react'
import Bookingdetails from '../components/booking/bookingdetails'
import Bookingfullform from '../components/booking/bookingfullform'
import Pageloader from '../components/common/loader'
import { useBooking } from '../context/DataContex'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRoom } from '../redux/slice/roomSlice'
const Booking = () => {
  const [error, setError] = useState(false);
  const {rooms,bookRoom,Rloading} = useSelector(state => state.room);
  const { booking, setBooking ,resetBookForm} = useBooking()
  const dispatch = useDispatch()
 
     useEffect(()=>{
      resetBookForm()
      dispatch(getAllRoom())
     },[])
       
   
     if (Rloading) {
      return <Pageloader isloading={Rloading}/>
     }
  return (
    <div className=''>           
        <div className=' '>
        <div className='container py-5 '>
            <h1 className='text-center section-title text-green -z-20'>Book<span>Now</span></h1>
            <div className='flex grow flex-col md:flex-row gap-2 w-full justify-center items-start  bg-transparent'>
               
               {/* column3  */}
               <div className='shadow-2xl px-4 py-3 w-full md:w-[700px]    items-start space-y-1'>
                    <p>Enter your details</p>
                    <p className='p-2 bg-teal-200 rounded-md'>Almost done! Just fill in the <span className='text-red-500 text-center'>*</span> required info</p>
                    <Bookingfullform />

               </div>
                {/* column2  */}
                <div className='  px-4 py-3 shadow-lg static w-60 flex-col items-start space-y-1'>
                    <Bookingdetails />
                    <hr className='divide-x-2 mt-1'/>     
                    <div className='py-2  space-y-1'>
                          <p>You selected:</p>
                          <p>Standard Double Room</p> 
                          <p>1 Room</p>
                          <p>{`${booking.adults + ' Adult'} ${booking.children + ' Child'}`}</p>
                          <a>change your selection</a> 
                    </div> 
                    <hr className='divide-x-2 mt-1'/>     

                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Booking