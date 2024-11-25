import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectList.css'

const projects = [
  {
    title: 'Мои работы в UX/UI',
    description: 'Ознакомьтесь с проектом',
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJGCph85ZwcVUX4MBBM-5AXXWiWmuNmA6FQ&s',
  },
  {
    title: 'Портфолио веб-приложений',
    description: 'Исследуйте проект',
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJGCph85ZwcVUX4MBBM-5AXXWiWmuNmA6FQ&s',
  },
  {
    title: 'Мои проекты во фронтенд-разработке',
    description: 'Изучите проект',
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJGCph85ZwcVUX4MBBM-5AXXWiWmuNmA6FQ&s',
  },
];

const ProjectList = () => {
  return (
    <div className="projectList">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
        
      ))}
    </div>
  );
};


export default ProjectList;
