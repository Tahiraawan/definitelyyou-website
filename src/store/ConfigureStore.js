import userSliceReducer from './userSlice'
import { configureStore } from "@reduxjs/toolkit";
//create store..
export const store=configureStore({
reducer:{
    //key wohi dain h jo userslice m daini h 
user: userSliceReducer
}
});