import React from 'react';
import './About.css'; 
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <div className="header-content">
          <div className="header-text">
            <h1>sadyrbekova jasmin</h1>
            <p>Веб разработчик | Моушен дизайнер | UI/UX</p>
            <button className="about-button">Записаться на консультацию</button>
          </div>
          <img
            className="header-photo"
            src="https://i.pinimg.com/736x/d1/52/d9/d152d9f37611132ebbc841c504499935.jpg"
            alt=""
          />
        </div>
      </header>


      <section className="about-marathon">
        <h2>ОБО МНЕ</h2>
        <p>
          Я ТЕКСТ ПОТОМ ПРИДУМАЮ КРУТОЙ
        </p>
     </section>
        <div className="wook">
          <div className="wo">Interestind<br/>MY PORTFOILO AND SKIL</div>
        </div>
     
        <div className="marathon-cards">
          <div className="card">01<br />none</div>
          <div className="card">01<br />none</div>
          <div className="card">01<br />none</div>
          <div className="card">01<br />none</div>
          <div className="card">01<br />none</div>
          <div className="card">01<br />none</div>

        </div>

    </div>
  );
}

export default About;
