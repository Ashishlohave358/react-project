import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";


//step 1 for create a redux file so we have to just create  a veriable and expirt then
const store= configureStore({
    reducer:{
        cart:CartSlice
    },
});
export  default store;