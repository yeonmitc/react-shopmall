import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/ProductDetail.css';
const ProductDetail = () => {
  const [loading, setLoading] =useState(false)
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/InfraWhale/tech-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
    setLoading(true);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]); // Added id to the dependency array

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <>{!loading ? <div className="spinner"></div> :
    <div className="detail-container">
      <div className="row">
        <div className="product-image">
          <img src={product?.img} alt={product?.title} />
        </div>
        <div className="product-info">
          {product?.new && <span className="detail-badge new">신상품</span>}
          {product?.choice && <span className="detail-badge choice">Conscious choice</span>}
          <h2 className="product-title">{product?.title}</h2>
          <p className="product-price">₩ {product?.price?.toLocaleString()}</p>

          <div className="size-select">
            <label htmlFor="size-select">사이즈 선택</label>
            <select id="size-select" onChange={handleSizeChange} value={selectedSize}>
              <option value="">사이즈를 선택하세요</option>
              {product?.size?.map((s, idx) => (
                <option key={idx} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <button
            className="buy-btn"
            disabled={!selectedSize}
          >
            {selectedSize ? '구매하기' : '먼저 사이즈를 선택하세요'}
          </button>
        </div>
      </div>
    </div>
}</>
  );
};

export default ProductDetail
