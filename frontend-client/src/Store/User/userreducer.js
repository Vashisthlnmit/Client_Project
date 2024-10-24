import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast"
const intialState={
    
};
export const loginaccount=createAsyncThunk('/login',async(data)=>{
    console.log(data);
    try{
     const response=axiosInstance.post('/v1/auth/login',data)
     toast.promise(response,{
        loading:"wait you are getting logging into",
        success: "your account has verified and you have successfully logged in",
        error:(err)=>{
            return err?.message
        }
     })
     const resp=await response;
     console.log(resp);
     return resp;
    }
    catch(err){
        console.log(err);
        toast.error(err?.response?.data?.message)
    }
})
export const OTPSending=createAsyncThunk('/sendotp',async(data)=>{
    console.log(data);
    try{
     const response=axiosInstance.post('/v1/auth/sendotp',data)
     toast.promise(response,{
        loading:"wait you are getting verified",
        success: "your account has verified and  successfully otp send on your email/phone please verify it to login",
        error:(err)=>{
            return err?.message
        }
     })
     const resp=await response;
     console.log(resp);
     return resp;
    }
    catch(err){
        console.log(err);
        toast.error(err?.response?.data?.message)
    }
})
export const RegisteringStudent=createAsyncThunk('/registerStudents',async(data)=>{
    console.log(data);
    try{
     const response=axiosInstance.post('/v1/auth/registerStudents',data)
     toast.promise(response,{
        loading:"wait you are getting verified",
        success: "your account has verified and  successfully otp send on your email/phone please verify it to login",
        error:(err)=>{
            return err?.message
        }
     })
     const resp=await response;
     console.log(resp);
     return resp;
    }
    catch(err){
        console.log(err);
        toast.error(err?.response?.data?.message)
    }
})
const Userpanel=createSlice({
    name:"UserPanel",
    initialState:intialState
})
export default Userpanel.reducer;
