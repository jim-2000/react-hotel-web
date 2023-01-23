import { getDefaultMiddleware  } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import hotelSlice from './slice/hotelSlice';
import roomSlice from './slice/roomSlice';

export default configureStore({
    reducer: {
        auth: authSlice,
        hotel: hotelSlice,
        room: roomSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
        // add other middlewares here
    })
    
});