import React from 'react'
import { useDispatch } from 'react-redux'

function addToCart({product}) {

   const dispatch =useDispatch();

   const handleAddToCart=()=>{
    dispatch(addToCart(product));
   };




  return (
    <button onClick={handleAddToCart}>Add to cart</button>
  )
}

export default addToCart;
