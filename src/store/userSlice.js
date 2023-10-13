// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from "../axiosConfig"
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser =createAsyncThunk(
    'user/loginUser',
    async(userCredentials)=>{
       const request=await axios.post("/login",userCredentials);
       const response=await request.data.data;
       localStorage.setItem("user",JSON.stringify(response)) 
       return response;
    }
);

const userSlice = createSlice(
   
    {
        name:'user',
        initialState:{
            loadig:false,
            user:null,
            error:null
          },
          extraReducers:(builder)=>{
            builder.addCase(
                loginUser.pending, 
                (state)=>{
                    state.loadig=true;
                    state.error=null;
                    state.user=null;
                }
                )
                .addCase(
                    loginUser.fulfilled,
                    (state,action)=>{
                        state.loadig=false;
                        state.error=action.payload;
                        state.user=null;
                        
                    }
                    
                )
                .addCase(
                    loginUser.rejected,
                    (state,action)=>{
                        state.user=null;
                        state.loadig=false;
                      console.log(action.error.message);
                      if(action.error.message === 'Request failed with status code 401'){
                       state.error = 'Access Denied! Invalid Credentials';
                    } 
                    else {
                        state.error = action.error.message;
                    }
                }
                    
                )
          }
    }

);
export default userSlice.reducer;