import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Intro from './components/intro/Intro';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

const App = () => (
  <Router>
    <div className="App">
      <div>
        <Header />
      </div>
      <Intro />
      <About />
      <Contact />
      <Footer />
    </div>
  </Router>
);
export default App;
