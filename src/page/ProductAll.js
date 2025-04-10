import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import '../css/ProductAll.css'
const ProductAll = ({authenticate}) => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/yeonmitc/jsondb/products`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect (() => {
    getProducts()
  }, []);

  return (
      <div className='container'>
        <div className='row'>
          {productList.map((menu) => (
            <div className='col'>
              <ProductCard item={menu} authenticate={authenticate}/>
            </div>
          ))}
        </div>
      </div>

  )
}

export default ProductAll