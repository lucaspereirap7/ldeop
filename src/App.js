import React from 'react';
import './App.css';
import Projects from './components/projects/projects';
import Skills from './components/aboutMe/skills';
import Contact from './components/contact/contact';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="currentColor" d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,90.7C672,64,768,64,864,80C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1040,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="wave"></path>
        </svg>
      </div>
      <Skills />
      <Projects />
      <div className="wave-dividerProjects">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="currentColor" d="M0,96L48,128C96,160,192,224,288,234.7C384,245,480,203,576,186.7C672,171,768,181,864,181.3C960,181,1056,171,1152,138.7C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="wave"></path>
        </svg>
      </div>
      <Contact />
    </div>
  );
}

export default App;
