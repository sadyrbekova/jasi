import React from 'react';
import './Contacts.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
      </header>

      <div className="contact-content">
        <div className="left-section">
          <h1 className="contact-title">КОНТАКТЫ</h1>
          <p className="contact-description">
          По любым вопросам или просто поздороваться свяжитесь по данным внизу.
          </p>

          <div className="contact-info">
            <div className="info-group">
              <h4>General Enquiries</h4>
              <p>Sadyrbekovazasmina320@gmail.com</p>
              <p>+996 550 297 397</p>
            </div>
          </div>

          <div className="social-links">
            <h4>Follow & Connect</h4>
            <p>
              <i className="fab fa-instagram"></i>
              <a href="https://www.instagram.com/sadyrbekovajasmina/profilecard/?igsh=MXdwajR2aW5nNDlmdw==" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </p>
            <p>
              <i className="fab fa-telegram"></i>
              <a href="https://t.me/mirlanbekovajasi" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </p>
            <p>
              <i className="fab fa-whatsapp"></i>
              <a href="https://wa.me/+996550297397" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </p>
          </div>
        </div>

        <div className="right-section">
          <div className="image-container">
            <img src="https://i.pinimg.com/564x/f9/54/3a/f9543a3bd3abe81cee54421ecf2f3294.jpg" alt="Contact View" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
