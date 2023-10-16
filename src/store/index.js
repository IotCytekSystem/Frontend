
import  useReducer  from "../store/userSlice"
// import profileReducer from "redux/profileReducer";

const { configureStore } = require("@reduxjs/toolkit");

const store =configureStore(
    {
        reducer:{
            user:useReducer,
            // profile:profileReducer
        }
    }
)
export default store







