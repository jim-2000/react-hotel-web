import React from 'react'
import InputFiled from '../components/common/inputFiled';
import RoomSpecility from '../components/rDetails/roomSpecility'
import RoomCalender from '../components/rDetails/roomCalender'
import Roomservices from '../components/rDetails/roomservices'
import RoomReviews from '../components/rDetails/roomReviews' 
import SimilarRoom from '../components/rDetails/similarRoom' 
import Datepicker from "react-tailwindcss-datepicker"; 
import RoomText from '../components/rDetails/roomText';
import RoomCarousel from '../components/rDetails/roomCarousel';
 
//
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosCalendar } from 'react-icons/io';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { useBooking } from '../context/DataContex';
import { BookNow, SelectRoomById } from '../redux/slice/roomSlice';
import { toast } from 'react-hot-toast';
import BookingPayment from '../components/booking/bookingPayment';
 

 


 

const Roomdetails = (props) => {
    // navigation state
  const {rooms,bookRoom} = useSelector(state => state.room);
    const location = useLocation();
    const [state, setState] = useState(location.state.roomData);
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null 
    }); 
    const [cost, setCost] = useState(state.price);
    const {booking,setBooking,resetBookForm } = useBooking()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    // 
    const onChange = (e)=>{
        const {name,value} = e.target;
        setBooking({...booking, [name]: value})  
    }
      //
    const handleValueChange = (newValue) => {
        const newvalS = new Date(newValue.startDate);
        // const formets =  format(newvalS, 'EEE-dd-MM-yyyy'); 
        const newvalE = new Date(newValue.endDate);
        // const formetE =  format(newvalE, 'EEE-dd-MM-yyyy'); 
        const countnight = Number(newvalE - newvalS)/1000/60/60/24 ;                   
        const total = Math.floor(countnight*cost);
        setValue(newValue); 
        setBooking({...booking,checkIn:newvalS,checkOut:newvalE,totalNight:countnight,totalAmount:total});
        console.log(countnight,newValue,total);
    } 
       
    React.useEffect(()=>{
        dispatch(SelectRoomById(state._id))
    },[])
  return (
    <div className='px-4'>
        <div className='container py-2 flex justify-between items-center'>
            <h6 className='text-text font-extrabold text-2xl '>{state.title}</h6>
            <div className='flex flex-col justify-start items-center'>
                <h6 className='text-gray font-extrabold font-body text-2xl'>${state.price}</h6>
                <h6 className='text-text font-semibold font-body'>per night</h6>
            </div>            
        </div>
        <div className='px-3  py-5 grid  md:grid-cols-[3fr,1fr] grid-cols-1 gap-16 md:gap-1 flex-wrap'>
            <div className='w-full -z-10 '>
                  {/* bookign image carousel  */}
                <div className='w-full'>
                 <RoomCarousel imgArry={state.img ?? []}  />
                </div>
                  {/* room specility   */}
                <div className='flex flex-wrap py-5  justify-between md:items-center  '>
                    <RoomSpecility room={state} />       
                </div>
                {/* bookign details   */}
                <div className='flex flex-col justify-start items-start flex-wrap space-y-2 container'>
                    <h6 className='text-xl font-semibold text-text'>Booking Details</h6>
                     <RoomText  text={state.description}/>
                </div>
               
                <div className='py-5  '>
                    <h6 className='text-xl font-semibold text-text pb-6'>Room Services</h6>
                    <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-row-dense '>
                       {
                       state.roomFeature.map((item,index)=>{
                            return <Roomservices key={index}  item={item} />
                        })
                       }                        
                    </div>
                </div>
                <div className='py-5  '>
                    <h6 className='text-xl font-semibold text-text pb-6'>Room Reviews</h6>
                    <div className='container '>
                       {
                          [1,2,3].map((item,index)=><RoomReviews key={index} />)
                       }
                    </div>
                </div>
                <div className='py-5'>
                    <h6 className='text-xl font-semibold text-text pb-6'>Similar Room</h6>  
                    <div className='container w-full grid grid-cols-2 md:grid-cols-3 
                    lg:grid-cols-4 gap-4 grid-flow-row-dense '>
                          {
                           rooms && rooms.map((item,index)=>{
                                return <SimilarRoom  key={index} room={item} />
                            })
                          }
                    </div>              
                </div>
            </div>

             {/* =============== static second column ============ */}
            <div className='w-full static px-1 row-start-1 md:row-auto'>
                <div className='border border-gray  p-3 mb-5 shadow'>
                    <h6 className='text-xl text-text'>This Room is Part of Zante Italy</h6>
                     
                </div>
                <div className='border border-gray  p-3 shadow'>
                    <h6 className='text-xl text-text'>Book {state.title} Room</h6>     
                
                        <div className='flex flex-wrap'>
                            <InputFiled 
                            isrequired={true}
                            title={'Your Name'}
                            type={'text'}
                            placeholder={'User Name'}
                            name={'name'}
                            onChange={(e)=> onChange(e)}
                            />
                            <InputFiled 
                            isrequired={true}
                            title={'Your Email'}
                            type={'text'}
                            placeholder={'john@doe.com'}
                            name={'email'}
                            onChange={(e)=> onChange(e)}
                            />
                            <InputFiled 
                            isrequired={true}
                            title={'Your phone'}
                            type={'text'}
                            placeholder={'+880 1999999'}
                            name={'phone'}
                            onChange={(e)=> onChange(e)}
                            />
                            
                            <InputFiled 
                            isrequired={true}
                            title={'Your address'}
                            type={'text'}
                            placeholder={'Bangladesh dhaka'}
                            name={'address'}
                            onChange={(e)=> onChange(e)}
                            />
                            <textarea className='my-2 p-2 border border-slate-400 h-20 w-full'
                                placeholder={'I need some decoration'}
                                name={'message'}
                                onChange={(e)=> onChange(e)}
                            >
                            </textarea>                             
                            <div className='flex items-center justify-between space-x-1  w-full'>               
                                <div className='flex items-center space-x-2'>
                                    <input type="checkbox" name="gest" id="gest" 
                                    onChange={(yes)=>{
                                    setBooking({...booking, isCarNeed: yes.target.checked})
                                
                                    }}
                                    />
                                    <p>Need A Car?</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-stretch justify-between py-3 w-full'>
                            <Datepicker 
                                containerClassName={'border-2 border-gray-300 py-2'}       
                                primaryColor={"fuchsia"} 
                                useRange={false} 
                                placeholder={"Select check in and Check Out Date"} 
                                value={value} 
                                onChange={handleValueChange} 
                                displayFormat={"DD/MM/YYYY"} 
                            />
                             <div className='py-2 '>
                                    <p className='text-gray-500 text-sm text-right'>For <span className='text-teal-500 font-semibold'>{booking.totalNight}</span> Night You need To pay <span className='text-teal-500 font-semibold'>${booking.totalAmount}</span> and PerNight <span className='text-teal-500 font-semibold'>${cost}</span></p>
                            </div>
                            <div>
                                <BookingPayment />
                            </div>
                            </div>
                            <button className=' bg-text btn btn-secondary text-white px-3 py-2 rounded-md w-full mt-3' 
                                disabled={!booking.token}
                               
                            onClick={()=>{
                                if (booking.checkIn && booking.checkOut && booking.name && booking.email && booking.phone) {
                                    const form = {
                                        ...booking,
                                        roomId:bookRoom._id,
                                     };
                                     console.log(form);
                                    dispatch(BookNow({toast,form,navigate}))
                                  }else{
                                    toast.error("Please Fill in all fields")       
                                  }                             
                            }}>Book Now</button>
                            
                        </div>
                                 
                </div>
              {/* <div className='flex flex-wrap gap-1'>
                <div className='border border-gray  w-full md:w-full md:h-96 p-3 shadow mt-5 h-24 bg-cover bg-center relative'
                    style={{
                        backgroundImage: `url(/imgs/room/room6.jpg)`,
                    }}
                    >
                    <h6 className='absolute font-bold text-text'>Google Advirtisement &amp;</h6>
                    </div>
                    <div className='border border-gray  w-full md:w-full md:h-96 p-3 shadow mt-5 h-24 bg-cover bg-center relative'
                    style={{
                        backgroundImage: `url(/imgs/room/room5.jpg)`,
                    }}
                    >
                        <h6 className='absolute font-bold text-text'>Google Advirtisement &amp;</h6>
                    </div>
                    <div className='border border-gray  w-full md:w-full md:h-96 p-3 shadow mt-5 h-24 bg-cover bg-center relative'
                    style={{
                        backgroundImage: `url(/imgs/room/room4.jpg)`,
                    }}
                    >
                        <h6 className='absolute font-bold text-text'>Google Advirtisement &amp;</h6>
                    </div>

             </div> */}
            </div>
        </div>
    </div>
  )
}
 
export default Roomdetails