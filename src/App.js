import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Intro from './components/intro/Intro';
import Contact from './components/contact/Contact';

const App = () => (
  <Router>
    <div className="App">
      <div>
        <Header />
      </div>
      <Intro />
      <Contact />
    </div>
  </Router>
);
export default App;
