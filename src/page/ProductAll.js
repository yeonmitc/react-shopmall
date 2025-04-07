import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import '../css/ProductAll.css'
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:5000/products`
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
              <ProductCard item={menu} />
            </div>
          ))}
        </div>
      </div>

  )
}

export default ProductAll