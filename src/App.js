import './App.css';
import Welcoming from './components/Welcoming';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Welcoming />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
