import React from 'react'
import logo from './img/jasi.jpg';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Логотип" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Главная</a></li>
        <li><a href="/projects">Проекты</a></li>
        <li><a href="/about">Обо мне</a></li>
        <li><a href="/contact">Контакты</a></li>
      </ul>
    </nav>
  );
};


export default Navbar;






