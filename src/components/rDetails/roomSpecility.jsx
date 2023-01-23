import React from 'react'
import { IoIosBed, IoIosPeople, IoIosSquareOutline, IoMdHome } from 'react-icons/io'

const RoomSpecility = ({room}) => {
  return (
    <>
                    <div className='flex justify-between items-center'>
                        <div className='px-2'>
                            <IoIosPeople 
                            size={26}
                            className='text-gray '
                            />
                        </div>
                        <div className='flex flex-col '>
                            <p className='text-sm text-gray' >Max Guests</p>
                            <p className='text-base text-text font-semibold' >{room.maxGuests}</p>
                            
                        </div>
                    </div>
                    <div className='flex justify-between items-center '>
                        <div className='px-2'>
                            <IoMdHome 
                            size={26}
                            className='text-gray '
                            />
                        </div>
                        <div className='flex flex-col '>
                            <p className='text-sm text-gray' >Room Sizes</p>
                            <p className='text-base text-text font-semibold' >{room.size} <span className='text-teal-500'>fit</span></p>
                            
                        </div>
                    </div>     
                    <div className='flex justify-between items-center '>
                        <div className='px-2'>
                            <IoIosBed 
                            size={26}
                            className='text-gray '
                            />
                        </div>
                        <div className='flex flex-col '>
                            <p className='text-sm text-gray'>Bed Type</p>
                            <p className='text-base text-text font-semibold' >
                            {room.bedType  === 0 ?'single' : room.bedType  === 1 ? 'double' : 'King' }
                            </p>
                            
                        </div>
                    </div>        
                    <div className='flex justify-between items-center mr-4 '>
                        <div className='px-2'>
                            <IoIosSquareOutline 
                            size={26}
                            className='text-gray '
                            />
                        </div>
                        <div className='flex flex-col '>
                            <p className='text-sm text-gray'>Room Type</p>
                            <p className='text-base text-text font-semibold' >
                            {room.roomType === 0 ?'single' : room.roomType === 1 ? 'double' : 'family' } Room
                            </p>
                            
                        </div>
                    </div>   
    </>
  )
}

export default RoomSpecility