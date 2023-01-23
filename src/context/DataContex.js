import React, { useContext, useState } from 'react'

const Bookform = {
    _id:'',
    name: '',
    email:'',
    phone: '',
    address: '',
    roomId: '',
    checkIn: new Date(),
    checkOut: new Date(),
    token: null,
    // paymentMethod: 0, // 0-> paypal , 1 -> card, 2->cash 
    paymentId:'', //      
    totalAmount: 50,
    totalNight: 1,  
    message:'',
    isCarNeed: false,
};
const BookingContext = React.createContext({})

export const useBooking = () => useContext(BookingContext)

export const BookingProvider = ({ children }) => {
    const [booking, setBooking] = useState(Bookform)
    const resetBookForm = () => setBooking(Bookform);
    return <BookingContext.Provider value={{ booking,setBooking,resetBookForm }} >{children}</BookingContext.Provider>
}

// Path: my-app\context\DataContex.js
export default BookingContext;