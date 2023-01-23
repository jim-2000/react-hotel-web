import React, { useCallback, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import Modal from 'react-modal';
// modal config
const customStyles = {
    content: {
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'40%',
      padding:'20px',
      margin:'0',
      backgroundColor:"#dddd"
    
    },
  };
const ErrorModal = ({title,subtitle,isOpen, isredAlert=false,toggle }) => {  
  return (
    <div >
        <Modal
               isOpen={isOpen}
               onAfterOpen={()=>{}}
               onRequestClose={toggle}
               style={customStyles}
               contentLabel="Example Modal"
               ariaHideApp={false}
               
            >
            <div className=''>
              <div className='flex items-end justify-end py-2'>
                    <IoIosClose 
                    style={{fontSize: '2rem', }}
                    className='text-red-500 cursor-pointer hover:text-main     transition-all ease-in duration-500'
                    onClick={()=> toggle }
                    />
              </div>
                <div className='flex flex-col items-start justify-center'>
                    <h1 className='text-xl font-body font-bold text-main'>{title}</h1>
                    <p className='text-text font-body'>{subtitle}</p>
                </div>

            </div>                 
          </Modal>
    </div>
  )
}

export default ErrorModal