import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import InputFiled from '../components/common/inputFiled'
import toast  from 'react-hot-toast'; 
import { forgotPassword } from '../redux/slice/authSlice';

const ForgotPassword = () => {
    const [email, setEmail] =React.useState('');
    const {loading,error} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = {
            email:email,
        };
        dispatch(forgotPassword({form,navigate,toast}));

    }

  return (
    <div className=' h-screen object-cover w-full bg-offer bg-cover bg-center bg-fixed
    flex flex-col justify-center items-center px-4 z-30'>
        
        <div className=' bg-transparent border border-text w-full md:w-[500px]  rounded-lg shadow-lg flex flex-col
         justify-start md:justify-center items-center  '>
            <div>
            <h1 className='text-center section-title text-text'><span>Forgot</span>now</h1>
        </div>
            <form className='w-full px-4 space-y-2 py-4'
            onSubmit={handleSubmit}
            
            >
                
               
                <InputFiled 
                 isrequired={true}
                    type={'email'}
                    placeholder={'Enter your Email'}
                    title={'Email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                 />
                
                <div className='flex justify-center items-center'>                    
                    <button className='btn btn-primary w-full' onClick={handleSubmit}>Forgot Passowrd</button>
                </div>
             
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword