import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes,Route, useLocation } from 'react-router-dom'
import Header from "../components/common/Header";
import FotterPart from '../components/common/footer';
import Pageloader from '../components/common/loader';
import { BookingProvider } from "../context/DataContex";
import Contact from "../pages/contact";
import Facilities from "./facilities";
import Home from "./home";
import Room from "./room";
import Roomdetails from "./roomdetails";
import Villas from "./vilas";
import Booking from './booking';
import Login from '../auth/login';
import Signup from '../auth/signup';
import { Toaster } from 'react-hot-toast';
import ForgotPassword from '../auth/forgotPassword';
import OtpPage from '../auth/otpPage';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slice/authSlice';
import { getHotel, getHotelDetails } from '../redux/slice/hotelSlice';
import About from './about';
import DawonloadInvoice from './invoice/dawonloadInvoice';
import PrivateRoute from '../components/PrivateRoute';
import VerifyMe from '../auth/verifyme';
import { getAllRoom } from '../redux/slice/roomSlice';

 
function App() {
   const [isLoading, setIsLoading] = useState(true)  
   const dispatch = useDispatch();
  
   const Isuser = JSON.parse(localStorage.getItem("user"));
   setTimeout(() => {
    setIsLoading(false);
   }, 3000);

   useEffect(() => {
     dispatch(getHotel());
     dispatch(getAllRoom());     
    if (Isuser) {
      dispatch(setUser(Isuser));
    }
   }, []);

   //
  return (
    <BrowserRouter>
      <BookingProvider>
        <Header />
        <Toaster  gutter={8}     position='top-right'
        toastOptions={{
          duration: 3000,          
        }}       
        />
        {
          isLoading ? <Pageloader isloading={setIsLoading} /> : (
            <Routes>
              <Route path="/" element={<Home />} loader={true}  />
              <Route path="/room" element={<Room />} />
              <Route path="/vilas" element={<Villas />} />  
              <Route path="/facilities" element={<Facilities />} />  
              <Route path="/contact" element={<Contact />} />  
              <Route path="/about" element={<About />} />  
              <Route path="/booking" element={<Booking />} />  
              <Route path="/room/:id" element={<Roomdetails />} />
              {/* booking routes  */}              
              <Route path="/invoice" element={
                  <PrivateRoute>
                    <DawonloadInvoice />
                  </PrivateRoute>
              }
              />
              {/* auth routes  */}
              <Route path="/login" element={<Login />} />
              <Route path="/verifyme" element={<VerifyMe />} />               
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={ 
                  <OtpPage />
              } 
              />
           </Routes>
          )
        }
        <FotterPart />
      </BookingProvider>
    </BrowserRouter>
  );
}

export default App;
