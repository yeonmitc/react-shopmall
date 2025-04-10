import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrivateRoute from './component/route/PrivateRoute';
function App() {
  const[authenticate, setAuthenticate] = useState(false) 

  const navigate = useNavigate();
  useEffect(() => {
  }, [authenticate, navigate]);
  return (
  <>
        <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
       <Routes>
        <Route path="/" element={<ProductAll authenticate={authenticate} />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/products/:id" element={ <PrivateRoute authenticate={authenticate}/> } />
      </Routes>
  </>
  );
}

export default App;
