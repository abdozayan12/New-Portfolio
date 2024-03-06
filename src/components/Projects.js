import React from 'react';
import '../styles/Projects.css';
import ProjectsData from './ProjectsData';

const Projects = () => (
    <div className="container">
        <section id="Projects" className="projects">
        <h1>Projects</h1>
        <div className="project-cards">
            {ProjectsData.map((project) => (
            <div key={project.id} className="project-card">
                <img src={project.image} alt="project" />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-links">
                <a href={project.Githublink} target="_blank" rel="noreferrer">Github</a>
                <a href={project.LiveDemo} target="_blank" rel="noreferrer">Live Demo</a>
                </div>
            </div>
            ))}
        </div>
        </section>
    </div>
);