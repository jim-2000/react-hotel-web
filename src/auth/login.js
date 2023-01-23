import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import InputFiled from '../components/common/inputFiled'
import Pageloader from '../components/common/loader';
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../redux/slice/authSlice';
import toast  from 'react-hot-toast'; 

 



const Login = () => {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const {loading,error} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //
    const submitForm = (e) => {     
        e.preventDefault();        
         const  form    = {     
            email: email,
            password: password,        
        };
        dispatch(login({form,navigate,toast}));    
    }

//
if(loading) {
    return <div className='flex justify-center items-center h-screen'><Pageloader isloading={loading} /></div>
}

   return (
  
    <div className=' h-screen py-5 object-cover w-full bg-offer bg-cover bg-center bg-fixed
    flex flex-col justify-center items-center px-4 z-30'>
        
        <div className=' bg-transparent border border-text w-full md:w-[500px]  rounded-lg shadow-lg flex flex-col
         justify-start md:justify-center items-center p-4 '>
            <div>
            <h4 className='text-center  text-white'><span>Login</span>now</h4>
        </div>
            <form className='w-full px-4 space-y-2 py-4'
            // onSubmit={submitForm}
            
            >                  
                <InputFiled 
                 isrequired={true}
                    type={'email'}
                    placeholder={'Enter your Email'}
                    title={'Email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                 />
                <InputFiled 
                isrequired={true}
                type={'password'}
                placeholder={'Enter your Password'}
                title={'Password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                 <div className=''>
                    <p className='text-right text-text'> <Link to={'/forgot-password'} className='text-orange-500 underline hover:text-text'>Forgot Passowrd ? </Link></p>
                </div>
                <div className='flex justify-center items-center'>                    
                    <button className='btn btn-primary w-full' onClick={submitForm}>Sign Up</button>
                </div>
              
                <div className=''>
                    <p className='text-center text-white text-sm'>Don't have an account? <Link to={'/signup'} className='text-primary font-bold hover:underline'>Sign Up</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login