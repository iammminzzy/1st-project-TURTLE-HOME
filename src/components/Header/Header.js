import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-wrapper">
        <div className="left-container">
          <div className="ham-menu">
            <i class="fa-regular fa-bars"></i>
          </div>
          <h1>
            <Link to="/">TURTLE HOME</Link>
          </h1>
        </div>
        <div className="center-container">
          <Link to="/" className="search-bar">
            <span>검색</span>
            <span className="search-line"></span>
          </Link>
        </div>
        <div className="right-container">
          <Link to="/" className="login-link">
            <span className="icon"></span>
            <span className="text">로그인</span>
          </Link>
          <Link to="/" className="basket-link">
            <span className="icon"></span>
            <span className="text">장바구니</span>
            <span>(</span>
            <span className="basket-count">0</span>
            <span>)</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
