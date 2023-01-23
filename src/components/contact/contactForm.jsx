import { useState } from 'react'
import InputFiled from '../common/inputFiled'

const ContactForm = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [msg, setmsg] = useState('')
  return (
    <div className='flex flex-col justify-between  w-full mb-5 space-y-5'>
         <InputFiled 
         title={"Enter Your Name"}
          type={"text"}
          value={name}
          setval={setname}
         />
         <InputFiled 
         title={"Enter Your Email"}
          type={"email"}
          value={email}
          setval={setemail}
         />
         <textarea 
         className='border-2 border-text p-2 hover:border-text rounded-md font-body h-[200px]'
         value={msg} onChange={(e)=>{
          setmsg(e.target.value)
         }} />
         
         {/* <div className='flex space-x-2 '>
          <InputFiled />
          <InputFiled />            
         </div>
         <div className='flex space-x-2 mb-2 '>
          <InputFiled />
          <InputFiled />            
         </div> */}
         <button className='btn btn-primary w-full'    
         onClick={()=>{
            console.log({name:name,email:email,msg:msg});
         }}>submit</button>
    </div>
  )
}

export default ContactForm