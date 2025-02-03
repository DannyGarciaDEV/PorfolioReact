import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
 
    <div className={darkMode ? "dark" : "light"}>
      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="aboutme">
        <h1>Hola! Welcome to Danny's Portfolio!</h1>
        <p>
          As a software engineer, I am passionate about building projects that make a difference in my community.
          One of my key projects, <strong>Citizenship Readiness</strong>, is a full-stack application designed to help 
          individuals prepare for the U.S. civics test in both English and Spanish, supporting those who may face language barriers.
        </p>
        <p>
          Over the past year, I have expanded my expertise by earning certifications in <strong>Fundamentals of Open Source IT and Cloud Computing</strong>
          from The Linux Foundation, as well as LinkedIn certifications in <strong>Cybersecurity Foundations, JavaScript, and IT Security</strong>.
          Additionally, I completed the University of Helsinki’s <strong>Full-Stack Open curriculum</strong> to further strengthen my technical skills.
        </p>
      </div>

      <div className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>My Not So Little Adventure</h3>
          <p>It's not just about exploring; it's about having a blast and uncovering Beantown's coolest landmarks together!</p>
        </div>
        <div className="project">
          <h3>Community Catalyst</h3>
          <p>With Community Catalyst, you can easily connect, organize, and make a meaningful impact.</p>
        </div>
        <div className="project">
          <h3>Danny AI phyton</h3>
          <p>A simple Python chat bot that learns and responds based on user input. The bot uses a knowledge base stored in a JSON file.</p>
        </div>
        <div className="project">
          <h3>Civics Test</h3>
          <p>Learn the 100 questions for the civics test in english and spanish!</p>
        </div>
      </div>

      <div className="contact">
        <h2>Contact</h2>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/dannygarciadev/" target="_blank">DannyGarciaDEV</a></p>
        <p><strong>Website:</strong> <a href="https://dannygarciadev.netlify.app/" target="_blank">dannygarciadev.netlify.app</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/DannyGarciaDEV" target="_blank">DannyGarciaDEV</a></p>
      </div>
    </div>

  );
}

export default App;
