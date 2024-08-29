import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  // Get product data from the store
  const storeData = useSelector((state) => state.cart.productData);

  return (
    <div>
      <h2  style={{color:"black"}}>Cart</h2>
      <p  style={{color:"black"}}>Count of Products: {storeData.length}</p>
      <p >product name :{}</p>
      
      {storeData.length > 0 ? (
        <ul>
          {storeData.map((product, index) => (
            <li key={index}>
              <h1 style={{color:"black"}}>{product.title}</h1>
              <p  style={{color:"black"}}>Price: ${product.price}</p>
              <img src={product.image}></img>
              
             

            </li>
          ))}
        </ul>
      ) : (
        <p>No products in the cart.</p>
      )}
    </div>
  );
}

export default Cart;

  