import React from 'react'
import ProjectList from '../components/ProjectList'
import ServicesList from '../components/ServicesList'
import photo from "../components/img/fon.jpg";


const Main = () => {
  return (
    <div className="App">
      <div className="background">
        <div className="banner">
          <div className="left">
            <h1>Портфолио: Садырбекова Жасмин</h1>
            <h2>
              Я разработчик, специализирующийся на создании веб-приложений с
              использованием React, Я увлекаюсь разработкой веб-приложений и
              люблю создавать что-то новое. У меня есть опыт работы с React,
              JavaScript, HTML и CSS
            </h2>
          </div>
          <div className="image-section">
            <img src={photo} alt="Ваше фото" />
          </div>
        </div>
        <ProjectList />
        <ServicesList />
      </div>
    </div>
  )
}

export default Main