import React, { useState } from 'react'
import { IoMdList,IoIosClose,IoLogoFacebook,IoLogoInstagram,IoLogoTwitter } from "react-icons/io";
import data from '../../data.json'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../redux/slice/authSlice';
//
const Header = () => {
    const [navlinks, setnavlinks] = useState(data.navData)
    const {user} = useSelector(state => state.auth);
    const [isOpen, setisOpen] = useState(false)
    const router = useLocation()
    const dispatch = useDispatch()
    const logoutme = () => {
        dispatch(setLogout())
    }
    const toggleNav = () => {
        setisOpen(!isOpen)
        console.log(isOpen);
    }
  
  return (
    <div className=''>
        <nav className=' px-5 py-2 bg-white backdrop-blur-lg shadow-lg md:flex md:justify-between md:items-center'>
            <div className='flex  cursor-pointer justify-between items-center'>
                <Link to={'/'}  >
                    <div className='flex cursor-pointer w-24 md:w-32 h-10 relative'>
                        {/* <Image
                        layout='fill'
                        src="/logo.svg"
                        className="mr-3 h-6 w-6 sm:h-9 cursor-pointer"
                        alt="Logo"
                        onClick={() => {

                        }}
                        /> */}
                            <h5 className="text-xl font-extrabold text-text"><span className="text-main">Hotel</span>Lunar</h5>
                        {/* <span className="self-center whitespace-nowrap text-sm font-bold text-main text-animate-income ">
                        HOTEL SEA FALL
                        </span> */}
                    </div>
                </Link>
          
              <div className='block md:hidden md:opacity-0 opacity-100 '>
                    {
                    isOpen ?
                    <IoIosClose 
                    style={{fontSize: '2rem', }}
                    className='text-green cursor-pointer hover:text-main     transition-all ease-in duration-500'
                    onClick={ toggleNav}
                    />:
                    <IoMdList 
                    style={{fontSize: '2rem', }}
                    className='text-green cursor-pointer hover:text-main'
                    onClick={ toggleNav}
                    />                                       
                    }
              </div>
          
            </div>
            
         
            <ul 
            className={`          
            md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white 
            left-0 md:w-auto
            py-4 md:py-0 pl-7 md:pl-0
            md:opacity-100 ${isOpen ? 'opacity-100 top-10' : 'opacity-0 top-[-400px]'} 
            transition-all ease-in duration-500
            w-full
            `}>
                {
                    navlinks.map((item, index) => <NavlinkLIS key={index} index={index} item={item} router={router} toggleNav  />)
                }          
                {
                    user === null ? <NavlinkLIS item={{name: 'Login', href: '/login'}} router={router}/> : <Link  className='my-4 md:my-0 btn btn-primary-circle hover:shadow  btn-animate' to={'/booking'}  >Book NOW</Link> 
                } 
                   
            </ul>
             {/* social icons  */}
            <div className='hidden  lg:flex'>
                   
                    <IoLogoInstagram  
                    style={{fontSize: '2rem', }}
                    className='text-pink-500 cursor-pointer hover:text-pink-700  '
                    onClick={ ()=>{
                        console.log("instagram");
                    }}
                    />
                    <IoLogoTwitter 
                    style={{fontSize: '2rem', }}
                    className='text-blue-500 cursor-pointer hover:text-blue-700 '
                    onClick={ ()=>{
                        console.log("twitter");
                    }}
                    />
                     <IoLogoFacebook 
                    style={{fontSize: '2rem', }}
                    className='text-blue-500 cursor-pointer hover:text-blue-700 animate-bounce hover:animate-none'
                    onClick={ ()=>{
                        console.log("facebook");
                    }}
                    />
            </div>
        </nav>
    </div>
  )
}

function NavlinkLIS({item, index, router},onClick) {
    return   (
        <li key={index} href={item.href} onClick={onclick} className='cursor-pointer mx-1 my-6 md:my-0 md:mx-2 hover:bg-slate-300 md:hover:bg-transparent'>
            <Link to={item.href}  className={`text-text text-sm mr-1 font-semibold transition-all ease-in   
                    duration-0 hover:duration-500
                    hover:text-main hover:font-bold 
                    hover:text-base hover:tracking-widest
                    focus:nav-active ${router.pathname == item.href ? 'nav-active' : '' } 
                    `}>
             {item.name}       
            </Link>
        </li>
    );  
}

export default Header