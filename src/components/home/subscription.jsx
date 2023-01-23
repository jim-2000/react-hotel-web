import React from 'react'
import { IoLogoAndroid, IoLogoApple } from 'react-icons/io'

const Subscription = () => {
  return (
    <div className='bg-text'>
            <div className='container flex flex-col md:flex-row md:items-center justify-between py-2'>
                <div className=''>
                    <h1 className="text-xl font-extrabold text-main"><span className="text-white">Download </span>NOW</h1>                           
                    <p className='font-body text-white'>our Mobile app is NOW Available</p>
                </div>
             
                <div className='flex my-5 justify-evenly items-center'>
                    <IoLogoAndroid 
                    size={100}
                    className='text-green border-2 border-green rounded-full p-2 mr-2 hover:bg-green hover:text-main hover:shadow-lg  transition easy-in hover:scale-110'
                    />
                    <IoLogoApple 
                      size={100}
                      className='text-white outline-none border-2 border-white rounded-full p-2 mr-2 hover:bg-white hover:border-none hover:text-main hover:shadow-lg  transition easy-in hover:scale-110'
                    />
                </div>
                 
            </div>
    </div>
  )
}

export default Subscription