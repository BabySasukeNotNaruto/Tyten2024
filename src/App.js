// App.js
import React from 'react';
import './App.css';
import Home from './Home';
import Projects from './Projects';
import About from './About';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />

      {/* Social Media Icons at the bottom of the page */}
      <footer className="footer">
        <div className="social-icons">
          <a href="https://github.com/BabySasukeNotNaruto" target="_blank" rel="noopener noreferrer">
            <img src="./github.jpg" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/tyten-vance/" target="_blank" rel="noopener noreferrer">
            <img src="./linked.jpg" alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
