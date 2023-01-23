import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';

const GetInTouch = () => {
  return (
    <div className='bg-white my-10'>                         
        <div className='container flex items-center justify-between  '>
         <div>
           <h1 className="text-xl font-extrabold text-main">JOIN <span className="text-text">WiTH </span>US</h1>
              <p className='font-body text-text'>Get in touch with us</p>         
         </div>  
         <div className='flex '>
                <IoLogoInstagram  
                    size={50}
                    className='text-pink-500 cursor-pointer hover:text-pink-700 transition easy-in hover:-translate-y-[10px]'
                    onClick={ ()=>{
                        console.log("instagram");
                    }}
                />
                <IoLogoTwitter 
                    size={40}
                    className='text-blue-500 cursor-pointer hover:text-blue-700 transition easy-in hover:-translate-y-[10px]'
                    onClick={ ()=>{
                        console.log("twitter");
                    }}
                />
                <IoLogoFacebook 
                    size={40}
                    className='text-blue-500 cursor-pointer hover:text-blue-700 animate-bounce hover:animate-none'
                    onClick={ ()=>{
                        console.log("facebook");
                    }}
                />
         </div>
        </div>
    </div>
  )
}

export default GetInTouch