import React from 'react'
import ProductDetail from '../../page/ProductDetail'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({authenticate}) => {
  // 인증이 안된 사용자만 /login 페이지로 인증이 완료된 사용자면 productDetail 페이지로 가라 
    return authenticate === true ? <ProductDetail authenticate={authenticate} /> : <Navigate to="/login" />;
}

export default PrivateRoute