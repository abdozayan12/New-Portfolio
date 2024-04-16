import React from 'react';
import backImage from '../assets/Purple Sky Profile Header.png';
import resortImage from '../assets/ProjectsImages/resort.png';
import budgetAppImage from '../assets/ProjectsImages/budget.png';
import spaceTravelersImage from '../assets/ProjectsImages/space.png';
import exploreCountriesImage from '../assets/ProjectsImages/country.png';
import toDoAppImage from '../assets/ProjectsImages/todo.png';
import bookstoreImage from '../assets/ProjectsImages/bookstore.png';
import weatherAppImage from '../assets/ProjectsImages/weather.png';
import conferenceImage from '../assets/ProjectsImages/conference.png';
import DishImage from '../assets/ProjectsImages/dish.png';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Resort Vista',
      tech: 'Rails API, React, Redux and PostgreSQL.',
      description:
        '"Resort Vista" is a web application built with a Ruby on Rails backend API and a React frontend UI, offering users a platform to explore and manage resort reservations. Whether you are planning a getaway or looking for a relaxing vacation spot, Resort Vista provides a seamless experience to discover, reserve, and manage your resort bookings.',
      imageUrl: backImage,
      modalImg: resortImage,
      liveDemoLink: 'https://resortvista.onrender.com/',
      githubSourceLink: '',
    },
    {
      id: 2,
      title: 'Budget App',
      tech: 'Ruby on Rails and PostgreSQL.',
      description:
        '"Budget App" is a Ruby on Rails mobile application designed to help users manage their expenses and budgets. With Budget App, users can track their expenses and categorize them to improve their financial management.',
      imageUrl: backImage,
      modalImg: budgetAppImage,
      liveDemoLink: 'https://budget-app-8pq6.onrender.com/',
      githubSourceLink: '',
    },
    {
      id: 3,
      title: 'Space Travelers Hub',
      tech: 'React, Redux and external API.',
      description:
        '"Space Travelers Hub" is a dynamic single-page web app connecting users to comprehensive rocket and mission data from SpaceX. Explore rockets, missions, and your profile seamlessly.',
      imageUrl: backImage,
      modalImg: spaceTravelersImage,
      liveDemoLink: '',
      githubSourceLink: '',
    },
    {
      id: 4,
      title: 'Country Explorer',
      tech: 'React, Redux and external API.',
      description:
        '"Explore The Countries" is a web application built using React and Redux that displays information about different countries. It consists of the following main pages: Homepage and Details. The project provides a user-friendly interface for users to search, sort, and view details about different countries.',
      imageUrl: backImage,
      modalImg: exploreCountriesImage,
      liveDemoLink: 'https://react-capstone-project-05mk.onrender.com/',
      githubSourceLink: 'https://github.com/abdozayan12/REACT-CAPSTONE-PROJECT',
    },
    {
      id: 5,
      title: 'To Do List',
      tech: 'React and CSS.',
      description:
        '"To Do App" is a tool that helps to organize your day, built with HTML, CSS, JavaScript and React. With its management features, User can add, mark as completed, remove tasks and make changes to tasks.',
      imageUrl: backImage,
      modalImg: toDoAppImage,
      liveDemoLink: '',
      githubSourceLink: '',
    },
    {
      id: 6,
      title: 'Bookstore',
      tech: 'React and Redux.',
      description:
        '"Bookstore" is a user-friendly application enabling book enthusiasts to effortlessly manage their book collections. Users can view, add, and remove books, as well as edit book details. ',
      imageUrl: backImage,
      modalImg: bookstoreImage,
      liveDemoLink: '',
      githubSourceLink: '',
    },
    {
      id: 7,
      title: 'Weather App',
      tech: 'React, Redux and external API.',
      description:
        '"Weather App" is a web application that provides users with real-time weather data. Users can search for weather information by city name and view details such as temperature, humidity, and wind speed.',
      imageUrl: backImage,
      modalImg: weatherAppImage,
      liveDemoLink: '',
      githubSourceLink: '',
    },
    {
      id: 8,
      title: 'conference',
      tech: 'HTML, CSS and JavaScript.',
      description:
        '"Conference" is a responsive web page built with HTML, CSS, and JavaScript. The project showcases a conference website with a landing page, schedule, speakers, and ticket information. Users can explore the conference details and register for the event.',
      imageUrl: backImage,
      modalImg: conferenceImage,
      liveDemoLink: 'https://abdozayan12.github.io/capstone-project---Conference-page/',
      githubSourceLink: 'https://github.com/abdozayan12/capstone-project---Conference-page',
    },
    {
      id: 9,
      title: 'Dish Discovery',
      tech: 'API, CSS, JavaScript and Webpack.',
      description:
        '"Dish Discovery" is a web application that allows users to explore and discover new dishes. Users can view dish details, search for dishes, and filter dishes by category. The project is built with React, CSS, and Webpack.',
      imageUrl: backImage,
      modalImg: DishImage,
      liveDemoLink: 'https://abdozayan12.github.io/Dish-Discovery/dist/',
      githubSourceLink: 'https://github.com/abdozayan12/Dish-Discovery',
    },
  ];

  return (
    <div className="projects-container" id="Projects">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-image">
            <img src={project.imageUrl} alt="project" />
          </div>
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.tech}</p>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveDemoLink} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.githubSourceLink} target="_blank" rel="noreferrer">
                Source Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
