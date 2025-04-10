import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import '../css/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const handleAuthClick = () => {
    setAuthenticate(!authenticate);
    // setAuthenticate(true);
    console.log("authenticate=" + authenticate)
    navigate(authenticate ? '/' : '/login');
    setIsMenuOpen(false);
  };

  const goToHome = () => {
    navigate('/'); 
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    if(e.key === "Enter") {
      let keyword = e.target.value;
    if (keyword.trim()) {
      navigate(`/?q=${keyword}`);
      setIsMenuOpen(false);
    }
    e.target.value='';
    }
  };

  return (
    <div className="navbar">
      <div className="login-banner">
      <button 
          className="login-button" 
          onClick={handleAuthClick}
          aria-label={ authenticate ? "Logout" : "Login"}
        >
          <FontAwesomeIcon icon={faUser} />
          <span>{ authenticate ? '로그아웃' : '로그인'}</span>
        </button>

      </div>
      <div>
        <div className="nav-section">
          <img
            width={100}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png"
            alt="H&M Logo"
            onClick={goToHome}
          />
        </div>
      </div>
      <div className="menu-area">
        <div className="menu-left" />
        <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>


        <ul className={`menu-list ${isMenuOpen ? 'active' : ''}`}>
          {menuList.map((menu, idx) => (
            <li key={idx}>{menu}</li>
          ))}
        </ul>
        
        <div className="menu-right">
          <div className="search-area">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="제품 검색" 
            onKeyUp={(event) => handleSearch(event)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;