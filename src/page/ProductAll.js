import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import '../css/ProductAll.css'
import NotFoundImage from '../img/notfound.png';
import { useSearchParams } from 'react-router-dom';  // 쿼리를 
const ProductAll = ({authenticate}) => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("q : ", searchQuery);
    let url = `https://my-json-server.typicode.com/yeonmitc/jsondb/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    console.log('data=' , data.length);
    setProductList(data);
  };

  useEffect (() => {
    getProducts()
  }, [query]);



// 상품이 없을 때 보여줄 컴포넌트
if (productList.length === 0) {
  return (
    <div className='container'>
      <div className='no-products'>
      <img 
            src={NotFoundImage} 
            alt="상품 없음" 
            className='not-found-image'
          />
        <h2>찾는 상품이 없습니다</h2>
        <p>다른 검색어를 시도해보세요.</p>
      </div>
    </div>
  );
}


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