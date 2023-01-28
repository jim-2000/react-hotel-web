import axios from "axios";

const base ='https://mern-hotel.onrender.com/api/';
// const base = `http://localhost:4000/api/`;
const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-type":"application/json"
    }
  };
const API = axios.create({
    baseURL: base,
    config,
});
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile"))
    }`
    }
    return req;
  })
// >>>>>>>>>>>>>>>>>>>>>>>> authentication  <<<<<<<<<<<<<<<<<<<<<<<<<<<<< 

export const ApiSinup = (form) => API.post("auth/register/",form);
export const ApiLogin = (form) => API.post("auth/login/",form);

// >>>>>>>>>>>>>>>>>>>>>>>> forgot password  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// >>>>>>>>>>>>>>>>>>>>>>>> auth forget otp etc part <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
export const ApiForgotPassword = (form) => API.post("auth/forgotPassword",form);
export const ApiOtpVerification = (form) => API.post("auth/otpVerify",form);
export const ApiResentOtpVerification = (form) => API.post("auth/resendOtp",form);
export const ApiResetPassword = (form) => API.post("auth/resetPassword",form);

// Room Api >>>>>>>>>>>>>
export const ApiGetAllRoom = () => API.get("rooms/");
export const ApiGetRoom = (id) => API.get(`room/getRoom/${id}`);
// >>>>>>>>>>>>>>>>>>>>>>>> hotel  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
export const ApiGetHotelDetails = () => API.get(`hottle/myHotel`);

// >>>>>>>>>>>>>>>>>>>>>>> Booking >>>>>>>>>>>>>>>>>>>>>>>

export const ApiGetBooked = (form)=>API.post(`booking/booked`,form);



  