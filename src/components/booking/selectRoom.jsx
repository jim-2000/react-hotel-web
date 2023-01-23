import React from 'react'
import { useBooking } from '../../context/DataContex';
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
const SelectRoom = () => {
  const {rooms} = useSelector(state => state.room);
  const { booking, setBooking } = useBooking()
  return (
    <div className='flex items-center justify-between space-x-1  w-full h-full '>
     
    </div>
  )
}

export default SelectRoom