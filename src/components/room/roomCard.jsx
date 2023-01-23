import React from 'react'

const RoomCard = ({img, Name, facilities}) => {
  return (
    <div>
        <img 
        src='https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt='room'
        className='w-[100%] h-[200px] md:h-[240px] object-cover hover:opacity-80 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-105 mb-2'
        />
        <h5 className='text-center font-bold text-base md:text-xl text-text'>STANDER DOUBLE ROOM</h5>
         <ul className='space-y-1 max-w-md list-disc list-inside text-gray-500  flex flex-col items-start'>
                <li className='text-center text-sm md:text-base text-text'>1 bathroom</li>
                <li className='text-center text-sm md:text-base text-text'>2 beds</li>
                <li className='text-center text-sm md:text-base text-text'>2 people</li>
         </ul>
        <div className='flex justify-between items-center'>
            <h4 className='text-main'>10,000 Per night</h4>
            <button className='  text-white px-4 py-2 button-2'>Book Now</button>
        </div>
    </div>
  )
}

export default RoomCard