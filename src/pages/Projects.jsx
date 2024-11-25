import React from "react";
import { Link } from "react-router-dom"
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cоздание веб сайта для обучение",
      description: "SALYMBEKOV UNIVERSITY",
      details:
        "Одна из первых моих работ являлось создание сайта для обучение по химии с понятным и интересным интерфейсом",
      link: "https://chemistry-two-eta.vercel.app/",
    },
    {
      id: 2,
      title: "NONE",
      description: "NONE",
      details:
        "NONE",
      link: "https://chemistry-two-eta.vercel.app/",
    },
    {
      id: 3,
      title: "NONE",
      description: "NONE",
      details:
        "NONE",
      link: "https://chemistry-two-eta.vercel.app/",
    },
  ];

  const testimonials = [
    {
      name: "////",
      company: "SALYMBEKOV UNIVERSITY",
      feedback:
        "none",
      date: "13.03.2023",
    },
    {
      name: "////",
      company: "NONE",
      feedback:
        "none",
      date: "18.09.2022",
    },
    {
      name: "",
      company: "NONE",
      feedback:
        "none.",
      date: "28.11.2022",
    },
  ];

  return (
    <div className="note-container">
      <header className="hero-section">
        <img src="" alt="" className="hero-image" />
        <div className="hero-text">
          <h1>
            Здесь вы можете увидеть мои проекты, демонстрирующие мои навыки в
            программировании и моушен-дизайне.
          </h1>
          <button className="hero-button">Learn More</button>
        </div>
      </header>

      <section className="stats-section">
        <div className="stat-card">
          Программирование:
          <br />
          <span>Веб разработка, frontetn</span>
        </div>
        <div className="stat-card">
          Моушен-дизайн
          <br />
          <span>Анимация для сайта или интерфейса</span>
        </div>
        <div className="stat-card">
          {" "}
          ключевые навыки:
          <br />
          <span>Оптимизация кода и креативный подход к дизайну</span>
        </div>
      </section>

      <section className="projects-section">
        <h2>Кейсы</h2>
        <p>
          мои готовые проекты.
        </p>
        <div className="project-cards">
          {projects.map((project) => (
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>{project.details}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Что говорят наши клиенты?</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>
                <strong>{testimonial.name}</strong>, {testimonial.company}
              </p>
              <p>{testimonial.feedback}</p>
              {/* <p className="testimonial-date">{testimonial.date}</p> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
