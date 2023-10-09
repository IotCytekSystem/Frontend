
import  useReducer  from "../store/userSlice"

const { configureStore } = require("@reduxjs/toolkit");

const store =configureStore(
    {
        reducer:{
            user:useReducer
        }
    }
)
export default store