import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api';


// >>>>>>>>>> create asyn thunk
// get Hotel Details
export const getHotel = createAsyncThunk(
    'hotel/getHotel',
    async (_,{rejectWithValue}) => {
    try {
        const response = await api.ApiGetHotelDetails();
        return response;
    } catch (error) {
        console.log(error);
        rejectWithValue(error);
    }
})

const initialState = {
    agentHotel: [],
    rooms: [],
    Hloading: false,
    Herror: '',
    hotel: null,
}

const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(getHotel.pending, (state,action) => {
                state.Hloading = true;            
            },)
        builder.addCase(getHotel.fulfilled, (state,action) => {
            state.Hloading = false;
                state.hotel = action.payload.data;         
        },)
        builder.addCase(getHotel.rejected, (state,action) => {
            state.Hloading = false;
                state.Herror = action.error;        
        },)
     
        // [getHotelDetails.pending]: (state,action) => {
        //     state.Hloading = true;            
        // },
        // [getHotelDetails.fulfilled]: (state,action) => {
        //     state.Hloading = false;
        //     state.hotel = action.payload;
        // },
        // [getHotelDetails.rejected]: (state,action) => {
        //     state.Hloading = false;
        //     state.Herror = action.error.message;
        // },
    }
})

export default hotelSlice.reducer