import React, { useState } from 'react'

const InputFiled = ({name, title,type,value, setval, placeholder ,isrequired,onChange , inputclass}) => {
  return (
    <div className={` flex flex-col w-full border-none `}>
      {title ? <label className='text-base font-bold text-text'>{title} {isrequired ? <span className='text-red-500'>*</span>: ''}</label> : null}  
        <input type={type} 
        onChange={setval ? (e)=> {           
            setval(e.target.value)          
        } : onChange}
        value={value}       
        placeholder={placeholder} 
        required={isrequired}
        name={name}
        className={` ${inputclass} border border-text p-2 rounded-md font-body  focus:border-text    `}
         
      />
     

    </div>
  )
}

export default InputFiled