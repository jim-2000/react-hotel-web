import React from 'react'

const OfferCard = () => {
  return (
    <div className='flex flex-col w-full md:w-80 drop-shadow-2xl  rounded bg-white cursor-pointer hover:scale-95 transition duration-500 ease-in-out'>
        <img 
        src='./imgs/room.jpg'
        alt='offer'
        className='w-full h-64 object-cover rounded-t-lg '
        />
        <div className='space-y-1 p-2'>
            <h3 className='text-lg font-bold text-text'>Offer Title</h3>
            <p className='text-text font-body'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At accusamus delectus ad provident saepe? Dignissimos doloribus cupiditate cum obcaecati sint rem corrupti dolorem accusantium quaerat praesentium. Eos placeat officia accusantium!</p>
        </div>
        <button className='btn btn-primary'>PURCHASE</button>
    </div>
  )
}

export default OfferCard