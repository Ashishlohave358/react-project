import React from 'react'
import {useEffect,useState} from 'react'
import Product from '../Componenets/Product'
import Pages from '../Componenets/Pages'
import Cart from '../Componenets/Cart';

function Main() {
    const [productData,setProductData]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);

    const url="https://fakestoreapi.com/products";

   let productPerPage=4;

   let totalPages=productData.length/productPerPage;

   let lastIndex=productPerPage*currentPage;

   let firstindex=lastIndex-productPerPage;

   let fiteredData=productData.slice(firstindex,lastIndex);

  //  console.log({currentPage,firstindex,lastIndex});



    useEffect(()=>{
        async function getDataFromApi(){
            const response=await fetch(url);
            const data=await response.json();
            setProductData(data);
        }
        getDataFromApi();

    },[])
  return (
    <div>
    <Product productData={fiteredData}/>
    <Pages totalPages={totalPages} setCurrentPage={setCurrentPage}/>
    
    <hr></hr>
    <Cart/>
    </div>
  )
}

export default Main
