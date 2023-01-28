import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import *  as api from '../api'
///

// extraReducers
export const login = createAsyncThunk(
    "auth/login",
    async ({ form, navigate ,toast}, { rejectWithValue }) => {    
      try {
        const response = await api.ApiLogin(form);
        toast.success(response.data['meassage'], {            
            Positions:'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });         
        if (response.status === 201) {
          navigate("/verifyme", { replace: true });   
        }else{
            navigate("/");
        }
        return response.data;
      } catch (err) {
        toast.error(err.response.data['meassage'].toString());        
        return rejectWithValue(err.response.data);
      }
    }
);
//
export const signup = createAsyncThunk(
    "auth/signup",    async ({ form, navigate ,toast}, { rejectWithValue }) => {
     
      try {
        const response = await api.ApiSinup(form);
        toast.success(response.data['message']);        
        console.log(response.data);         
        navigate("/verifyme", { replace: true });   
        return response.data;
      } catch (err) {
        toast.error(err.response.data['message'].toString());        
        return rejectWithValue(err.response.data);
      }
    }

);
// forgotPassword
export const forgotPassword = createAsyncThunk(
    "auth/forgotPassword",    async ({ form, navigate ,toast}, { rejectWithValue }) => {
        try {
            const response = await api.ApiForgotPassword(form);
            toast.success(response.data['meassage']);
            navigate("/reset-password", { replace: true , state:{email: form.email} }, );
            return response.data;
          } catch (err) {
            toast.error(err.response.data['meassage'].toString());        
            return rejectWithValue(err.response.data);
          }
    }
);
// otpVerify
export const otpVerify = createAsyncThunk(
    "auth/otpverify",    async ({ form, navigate ,toast}, { rejectWithValue }) => {
        try {
            const response = await api.ApiOtpVerification(form);
            toast.success(response.meassage);
            navigate("/");
            return response.data;
          } catch (err) {
            toast.error(err.response.meassage.toString());        
            return rejectWithValue(err.response.data);
          }
    }
);
// resentOtpVerify
export const resentOtpVerify = createAsyncThunk(
    "auth/resentOtpVerify",    async ({ form ,toast}, { rejectWithValue }) => {
        try {
            const response = await api.ApiResentOtpVerification(form);
            toast.success("Otp sent again to your email");
            return response.data;
          } catch (err) {
            toast.error(err.response.data['meassage'].toString());  
            console.log(err);      
            return rejectWithValue(err.response.data);
          }
    }
);
// reset password
export const resetPassword = createAsyncThunk(
    "auth/resetpassword",    async ({ form, navigate ,toast}, { rejectWithValue }) => {
       console.log(form);
        try {
            const response = await api.ApiResetPassword(form);
            toast.success("Password reset successfully");
            navigate("/login");
            return response.data;
          } catch (err) {
            toast.error(err.response.data['message'] );  
            console.log(err);      
            return rejectWithValue(err.response.data);
          }
    }
);
//// initailState
const initialState = {
    user: null,
    error:'',
    loading:false,
    isAuth:false,
    message:'',
}
//
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload))
            state.user = action.payload;
            state.error = '';
            state.isAuth = true;
        },
        setLogout: (state) => {
            localStorage.clear()
            window.sessionStorage.clear()
            state.user = null;
            state.isAuth = false;
            state.error = '';
        },
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.loading = true;
        },
        [login.fulfilled]: (state,action) => {
            state.loading = false;
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify({ ...action.payload.user }));
            state.isAuth = true;
            state.error = '';
        },
        [login.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload; 
        },
        [signup.pending]: (state) => {
            state.loading = true;
        },
        [signup.fulfilled]: (state,action) => {
            state.loading = false;
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify({ ...action.payload.user }));
            state.isAuth = true;
            state.error = '';
        },
        [signup.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload; 
        },
        [forgotPassword.pending]: (state) => {
            state.loading = true;
        },
        [forgotPassword.fulfilled]: (state,action) => {
            state.loading = false;
            // state.user = action.payload;
            state.isAuth = true;
            state.error = '';
        },
        [forgotPassword.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload; 
        },
        [otpVerify.pending]: (state) => {
            state.loading = true;
        },
        [otpVerify.fulfilled]: (state,action) => {
            state.loading = false;
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify({ ...action.payload.user }));
            state.isAuth = true;
            state.error = '';
        },
        [otpVerify.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload; 
        },
        [resetPassword.pending]: (state) => {
            state.loading = true;
        },
        [resetPassword.fulfilled]: (state,action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuth = true;
            state.error = '';
        },
        [resetPassword.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload; 
        },
        [resentOtpVerify.pending]: (state) => {
            state.loading = true;
        },
        [resentOtpVerify.fulfilled]: (state,action) => {
            state.loading = false;         
            state.error = '';
        },
        [resentOtpVerify.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload; 
        },
    },
})
export const {setLogout,setUser} = authSlice.actions
export default authSlice.reducer

