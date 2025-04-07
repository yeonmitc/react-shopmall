import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Added faBars for hamburger
import '../css/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Menu is visible by default

  const goToLogin = () => {
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div>
        <div className="nav-section">
          <img
            width={100}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png"
            alt="H&M Logo"
            onClick={() => navigate('/')}
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
            <input type="text" placeholder="제품 검색" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;