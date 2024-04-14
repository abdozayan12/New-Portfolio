import React from 'react';


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
      liveDemoLink: '',
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
      liveDemoLink: '',
      githubSourceLink:'',
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
      title: 'Calculator',
      tech: 'React and CSS.',
      description:
        '"Calculator" is a web application built with React and CSS, allowing users to perform basic arithmetic operations. Users can add, subtract, multiply, and divide numbers with ease.',
      imageUrl: backImage,
      modalImg: calculatorImage,
      liveDemoLink: '',
      githubSourceLink: '',
    },
    {
      id: 9,
      title: 'Portfolio',
      tech: 'React, CSS and Webpack.',
      description:
        '"Portfolio" is a personal website built with React and CSS, showcasing my projects, skills, and contact information. Users can explore my portfolio and get in touch with me for collaboration or inquiries.',
      imageUrl: backImage,
      modalImg: portfolioImage,
      liveDemoLink: '',
      githubSourceLink: '',
    }
  ];
  return
  {
    projects.map((project) => (
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
    ));
  }
}

export default Projects;
