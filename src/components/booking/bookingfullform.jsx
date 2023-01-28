import React, { useEffect, useState } from 'react'
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'
import { IoIosCalendar, IoIosClose  } from "react-icons/io";
import Modal from 'react-modal';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
//
import ConfirmModal from './confirmModal';
import ErrorModal from '../common/errorModal';
import Pageloader from '../common/loader';
import ReservForm from '../common/reservForm';
import useToggle from '../../hook/useToggle';
//
import InputFiled from '../common/inputFiled'
import { useBooking } from '../../context/DataContex';
import SelectRoom from './selectRoom';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BookingPayment from './bookingPayment';
import { BookNow } from '../../redux/slice/roomSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// modal config
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'80%',
    position:'absolute',
  
  },
};
// Modal.setAppElement('#app')


const Bookingfullform = () => {
  const { booking, setBooking,resetBookForm } = useBooking()
  const [isOn, toggleIsOn] = useToggle();
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const MySwal = withReactContent(Swal);
  const priceForStripe = booking.totalAmount * 100;
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
    const onChange = (e)=>{
      const {name,value} = e.target;
      setBooking({...booking, [name]: value})  
  }

 

  
  return (
    <div className='p-0 m-0 '>
      <div className='space-y-3 w-full'>
        <ReservForm 
        hidebtn={true}
        />
     
      </div>
      <div className='flex flex-col  justify-start md:space-x-1 space-x-0'>
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
            <textarea className='my-2 p-2 border border-slate-400 h-20'
                placeholder={'I need some decoration'}
                name={'message'}
                onChange={(e)=> onChange(e)}
            >
            </textarea>            
                                        
            <div className='flex items-center space-x-2'>
                <input type="checkbox" name="gest" id="gest" 
                onChange={(yes)=>{
                  setBooking({...booking, isCarNeed: yes.target.checked})
                }}
                />
              <p>Need A Car?</p>
            </div>
          
        
        <div className='py-4 '>
          <p>Payment Now</p>
           <BookingPayment />
        </div>
         
     
      <button className='btn btn-primary  bg-main text-white py-2 px-4 rounded-md w-full mt-3 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:border-slate-600 disabled:border-2'
      disabled={!booking.token}
      onClick={()=>{       
        if (booking.checkIn && booking.checkOut && booking.name && booking.email && booking.phone &&booking.roomId && booking.token) {
          const form = booking;
          dispatch(BookNow({toast,form,navigate}))
          resetBookForm()
        }else{
          toast.error("Please Fillup this form and pay")          
        }
        
      }}
      >Book Now</button>
    </div>
    </div>
  )
}

export default Bookingfullform