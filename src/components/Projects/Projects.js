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
  ];
}

export default Projects;
