import React from 'react'
import OTPInput from "otp-input-react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { otpVerify, resentOtpVerify, resetPassword } from '../redux/slice/authSlice';
import InputFiled from '../components/common/inputFiled';
const VerifyMe = () => {
    const [otp, setOtp] = React.useState('');
    const {loading,error,user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
   if (!user) {
     navigate('/login');
   }
const handleSubmit = (e) => {
    e.preventDefault(); 

    if (otp.length < 6) {
        toast.error('Please enter valid OTP');
        return;
    } 
    const form = {
        "email":`${user.user.email}`,
        "otp":`${otp}`
   }
    dispatch(otpVerify({form,navigate,toast}));
}
const handleResend = (e) => {
    e.preventDefault(); 
    const form = {
        "email":`${user.user.email}`
   }
    dispatch(resentOtpVerify({form,toast}));
}

  return (
    <div className=' h-screen object-cover w-full bg-offer bg-cover bg-center bg-fixed
    flex flex-col justify-center items-center px-4'>
        
        <div className='bg-transparent w-full   md:w-[650px]
         rounded-lg shadow-lg flex flex-col 
         justify-start md:justify-center items-center border border-text p-2'>
            <div className='my-2'>
                <h1 className='text-center  text-main'><span>OTP</span></h1>
            </div>
            <div className='my-4 ' >
            <OTPInput value={otp}
              onChange={(e)=>setOtp(e)}
              autoFocus
              OTPLength={6}
              otpType="number" 
              disabled={false} secure 
              inputClassName='border border-main rounded-lg p-4  text-center text-xl  '
              inputStyles={{
                color: 'white',            
                width: '3rem',
                height: '3rem',
                backgroundColor: 'transparent', 
             }}
            
            />
            </div>
                         
              
            <div className='flex justify-center items-center w-full md:w-3/4'>                    
                <button className='btn btn-secondary border border-main rounded w-full' onClick={handleSubmit}>verify OTP</button>
                
            </div>            
            <p className='text-right text-text underline cursor-pointer hover:text-main py-4' onClick={handleResend}>Sent again ?</p>                 
             
          
        </div>
    </div>
  )
}

export default VerifyMe