import React from 'react'
import InfoPlate from './infoPlate'
import { IoMdList,IoIosCall,IoIosMail,IoIosPin } from "react-icons/io";
const ContactInfo = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-evenly '>
        <InfoPlate 
        icons={
             <IoIosCall 
            style={{fontSize: '2rem', }}
            className='text-main cursor-pointer hover:text-green'            
            /> 
            }
            text="+880 1843687579"
        />
        <InfoPlate 
         icons={
            <IoIosMail 
           style={{fontSize: '2rem', }}
           className='text-main cursor-pointer hover:text-green'            
           /> 
           }
           text="hossainaljim24@gmail.com"
        />
        <InfoPlate 
         icons={
            <IoIosPin 
           style={{fontSize: '2rem', }}
           className='text-main cursor-pointer hover:text-green'            
           /> 
           }
           text="Road 12, Peace Avenue,Ado,Ekiti"
        />
    </div>
  )
}

export default ContactInfo