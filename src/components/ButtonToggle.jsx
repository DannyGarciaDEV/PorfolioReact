import { useState } from 'react';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects';
import Contact from './Contact';
export default function ButtonToggle(){
    const [darkMode, setDarkMode] = useState(false);
 return(
          <div className={darkMode ? "dark" : "light"}>
      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <AboutMe />
      <Projects />
      <Contact />
 </div>
 )
}