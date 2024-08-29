import { createSlice } from "@reduxjs/toolkit";

  const cartSlice=createSlice({
    name:"cart",

    initialState:{
        productData:[]
    },
    reducers: {
        addToCart(state, action) {
          let userData = action.payload;
          console.log(userData)
          state.productData.push(userData);
        },
    }
 })
 //4
export const {addToCart}=cartSlice.actions;
 //5
 export default cartSlice.reducer;