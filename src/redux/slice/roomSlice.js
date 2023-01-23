import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api';
// >>>>>>>>>> create asyn thunk
// get all room
export const getAllRoom = createAsyncThunk('room/getAllRoom',
async (_,{rejectWithValue}) => {
 try {
    const {data} = await api.ApiGetAllRoom();
    return data;
 } catch (error) {
    rejectWithValue(error);
 }
})

export const BookNow = createAsyncThunk(
    'room/bookNow',
    async ({toast,form,navigate},{rejectWithValue}) => {
        try {
            const {data} = await api.ApiGetBooked(form)
            toast.success("Your Booking is Done we sent you a copy of Ticket")
            navigate('/')
            return data;
        } catch (error) {
            rejectWithValue(error);
            toast.error("Something went wrong try again after 10 minutes.");
        }
    },
);

//
const initialState = { 
    rooms: [],
    room:{},
    bookRoom:{},
    Rloading: false,
    Rerror: '',
    hotel: null,
}

const RoomSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        SelectRoomById:(state,action)=>{
            state.bookRoom = state.rooms.find((room)=>room._id === action.payload)
         }  
    },
    extraReducers: {
        [getAllRoom.pending]: (state,action) => {
            state.Rloading = true;            
        },
        [getAllRoom.fulfilled]: (state,action) => {
            state.Rloading = false;
            state.rooms = action.payload;
        },
        [getAllRoom.rejected]: (state,action) => {
            state.Rloading = false;
            state.Rerror = action.error.message;
        },
        [BookNow.pending]: (state,action) => {
            state.Rloading = true;            
        },
        [BookNow.fulfilled]: (state,action) => {
            state.Rloading = false;
            // state.rooms = action.payload;
        },
        [BookNow.rejected]: (state,action) => {
            state.Rloading = false;
            state.Rerror = action.error.message;
        },
    }
})

export const {SelectRoomById} = RoomSlice.actions;
export default RoomSlice.reducer