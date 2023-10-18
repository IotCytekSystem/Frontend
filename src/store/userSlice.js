// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from "../axiosConfig"
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialUser = JSON.parse(localStorage.getItem('user'));


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
      const request = await axios.post("/login", userCredentials);
      const response = await request.data;
      localStorage.setItem("user", JSON.stringify(response));
      return response; // You should return the entire response, not just response.data
    }
  );
  
  export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
    // Clear user data from local storage
    localStorage.removeItem("user");
    return null;
  });

const userSlice = createSlice(
   
    {
        name:'user',
        initialState:{
            loadig:false,
            user: initialUser || null, // Set the user from local storage
            error:null,
            isAuth: false,
          },
          extraReducers:(builder)=>{
            builder.addCase(
                loginUser.pending, 
                (state)=>{
                    state.loadig=true;
                    state.error=null;
                    state.user=null;
                    state.isAuth = true;
                }
                )
                .addCase(
                    loginUser.fulfilled,
                    (state,action)=>{
                        state.loadig=false;
                        state.error=action.payload;
                        state.user=null;
                        state.isAuth = false; 
                        
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
                .addCase(logoutUser.fulfilled, (state) => {
                    // User is logged out, clear the user state
                    state.user = null;
                    state.error = null;
                  });
          }
    }

);
export default userSlice.reducer;