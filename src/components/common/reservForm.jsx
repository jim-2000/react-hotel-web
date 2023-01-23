import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { DateRange } from 'react-date-range';
import { IoIosCalendar } from 'react-icons/io';
import {useBooking} from '../../context/DataContex'; 
import Datepicker from 'react-tailwindcss-datepicker';
import { Icon } from '@iconify/react';
import { useSelector,useDispatch } from 'react-redux';
import { SelectRoomById } from '../../redux/slice/roomSlice'
//
const ReservForm = ({css, hidebtn=false}) => {
  const [selectRoom, setSelectRoom] = useState();
  const { booking, setBooking} = useBooking()
  const {rooms,bookRoom} = useSelector(state => state.room);
  const dispatch = useDispatch()
  const [value, setValue] = useState({ 
    startDate: null, 
    endDate: null 
}); 
const [cost, setCost] = useState(0)

    const handleValueChange = (newValue) => {
      const newvalS = new Date(newValue.startDate);
      // const formets =  format(newvalS, 'EEE-dd-MM-yyyy'); 
      const newvalE = new Date(newValue.endDate);
      // const formetE =  format(newvalE, 'EEE-dd-MM-yyyy'); 
      const countnight = Number(newvalE - newvalS)/1000/60/60/24 ;                   
      const total = Math.floor(countnight*cost);
      setValue(newValue); 
      setBooking({...booking,checkIn:newvalS,checkOut:newvalE,totalNight:countnight,totalAmount:total});
    } 
    const onChanged = (e)=>{
      const {name,value} = e.target;     
      setBooking({...booking, [name]: value})  
      dispatch(SelectRoomById(value))
      console.log(value);
    }

   
  useEffect(()=>{
    setCost(0)                                    
    setCost(bookRoom.price)                                    
    const total = Math.floor(booking.totalNight* bookRoom.price);
      setBooking({...booking,totalAmount:total});
      console.log('fire');
  },[bookRoom])

 
  
  return (
    <div className={` ${css} space-y-4`}>  
              <Datepicker 
                    containerClassName={'border-2 border-gray-300 py-2'}       
                    primaryColor={"fuchsia"} 
                    useRange={false} 
                    placeholder={"Select check in and Check Out Date"} 
                    value={value} 
                    onChange={handleValueChange} 
                    displayFormat={"DD/MM/YYYY"} 
              />
          
               
      <select
        value={booking.roomId}
        // defaultValue={booking.room}
        name='roomId'
        className='w-full p-4 border border-text flex'
        onChange={(e)=>onChanged(e)}
        >        
              <option disabled selected>Choose Your Room</option>
            {
                  rooms.map((room, index) => {
                    return(
                      <>
                        <option key={index} value={room._id} className='p-2 bg-slate-400 hover:bg-slate-500'>
                              <div className='flex justify-between'>
                                <p>
                                    {room.title}
                                </p>
                              <div className='flex justify-between'>
                                  <p>
                                      {room.price}
                                  </p>
                                  <Icon icon="ph:currency-circle-dollar-bold" color="green" /> 
                            </div>  
                              </div>
                        </option>
                   </>
                )
             })
         } 
      </select>
      <div className='py-2 '>
            <p className='text-gray-500 text-sm text-right'>For <span className='text-teal-500 font-semibold'>{booking.totalNight}</span> Night You need To pay <span className='text-teal-500 font-semibold'>${booking.totalAmount}</span> and PerNight <span className='text-teal-500 font-semibold'>${cost}</span></p>
      </div>
        
    </div>
  )
}

export default ReservForm