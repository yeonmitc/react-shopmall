import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
function App() {

  return (
  <>
       <Navbar />
       <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={ <ProductDetail /> } />
      </Routes>
  </>
  );
}

export default App;
