import React from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

function Product({ productData }) { // Accept productData as a prop
  const dispatch = useDispatch();

  const handleOnClick = (product) => { // Pass the specific product to the handler
    dispatch(addToCart(product));
  };

  return (
    <div className="outer">
      {productData.map((product) => (
        <div className="product" key={product.id}>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <h3>Rs: {product.price}</h3>
          <button onClick={() => handleOnClick(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Product;
