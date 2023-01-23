import React,{useState} from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import InputFiled from '../components/common/inputFiled'
import Pageloader from '../components/common/loader';
import { ApiSinup } from '../redux/api';
import { signup } from '../redux/slice/authSlice';
 

 



const Signup = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading , setIsloading]  =useState(false);
    const  {loading,error} = useSelector((state)=>state.auth);
   const dispatch = useDispatch();
   const navigate = useNavigate();
    //
const submitForm = (e) => {
        setIsloading(true);
        e.preventDefault();
        if (password !== confirmPassword) {
            return toast.error('Passwords dont match');
        }
        const  form    = {
            username: fname + ' ' + lname,
            email: email,
            password: password,
            phone: '1234567890'
        };
        dispatch(signup({form,navigate,toast}));
}
//
if(loading) {
    return <div className='flex justify-center items-center'><Pageloader isloading={loading} /></div>
}

  return (
    <div className=' h-screen object-cover w-full bg-about object-cover bg-cover bg-center bg-fixed
    flex flex-col justify-center items-center px-4 z-30'>
        
        <div className='bg-transparent border border-text w-full md:w-[500px]  rounded-lg shadow-lg flex flex-col
         justify-start md:justify-center items-center  '>
            <div>
            <h1 className='text-center section-title text-text'><span>Sign</span>up</h1>
        </div>
            <form className='w-full px-4 space-y-2 py-4'
            onSubmit={submitForm}
            >
                <div className='flex flex-col md:flex-row  justify-between  md:items-center '>
                     <div>
                         <InputFiled 
                            isrequired={true}
                            type={'text'}
                            placeholder={'john'}
                            title={'First Name'}   
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}

                        />
                     </div>
                     <div>
                         <InputFiled 
                            isrequired={true}
                            type={'text'}
                            placeholder={'doe'}
                            title={'Last Name'}                    
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}

                        />
                     </div>
                </div>
               
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
                <InputFiled 
                isrequired={true}
                type={'password'}
                placeholder={'confirm Password'}
                title={'Confirm Password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className='flex justify-center items-center'>
                    <button className='btn btn-primary w-full md:w-3/4'>Sign Up</button>
                </div>
                <div className=''>
                    <p className='text-center text-text'>Alrady have an account? <Link to={'/login'} className='text-primary'>Sign In</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup