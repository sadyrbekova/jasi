import React from 'react';
import './Footor.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>SADYRBEKOVA JASMIN</h2>
        </div>
        
        <div className="footer-links">
          <a href="./Projects">Проекты</a>
          <a href="./about">Обо мне</a>
          <a href="./contact">Контакты</a>
        </div>
        
        <div className="footer-socials">
          <a href="https://www.instagram.com/sadyrbekovajasmina/profilecard/?igsh=MXdwajR2aW5nNDlmdw==" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 SADYRBEKOVA JASMIN. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
