import React from 'react'

const RestorantCard = ({facilities}) => {
  return (
    <div className='relative' >
        <img      
        src= {facilities.image ? facilities.image : 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'}
        alt='facilities'
        layout='fill'
        className='w-[100%] h-[200px] md:h-[240px] object-cover hover:opacity-80 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-105 mb-2 '
        />
        <div className='absolute top-0 left-0 w-[100%] h-[200px] md:h-[240px] bg-gradient-to-b from-pink-100 to-transparent ' />

        <p className='absolute top-2 right-2 p-1 cursor-pointer bg-main text-center text-text font-bold'>
            {
               facilities.resturantType ? facilities.resturantType ==1 ? 'Resturant' : 'Cafe' : ''
            }
        </p>
        <p className='absolute bottom-14 left-0 p-1 cursor-pointer bg-text text-center text-main font-bold'>
            {facilities.distance}
        </p>
        
        <h6 className='text-center text-text font-bold pb-2 cursor-pointer'>{facilities.name ?  facilities.name : 'Hervest Bar and Cafe'}</h6>
      
    </div>
  )
}

export default RestorantCard