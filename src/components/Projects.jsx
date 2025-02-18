export default function Projects() {
    return (
      <div className="projects">
        <h2>Projects</h2>
        
        <div className="project">
          <h3> <a href="https://mynotsoadv.netlify.app/" target="_blank"> My Not So Little Adventure </a></h3>
          <img src="/src/assets/mynotsolittle.png"></img>
          <p>It's not just about exploring; it's about having a blast and uncovering Beantown's coolest landmarks together!</p>

        </div>

        <div className="project">
          <h3>  <a href="https://spidermancalculator.onrender.com/" target="_blank" >React Calculator </a></h3>
          <img src="/src/assets/calculator.png"></img>
          <p>Calculate numbers with Spiderman!</p>
        </div>
        
        <div className="project">
         <h3> <a href="https://community-catalyst.onrender.com/" target="_blank" >Community Catalyst</a> </h3>
         <img src="/src/assets/community.png"></img>
          <p>With Community Catalyst, you can easily connect, organize, and make a meaningful impact.</p>
        </div>
        
        <div className="project">
          <h3> <a href="https://github.com/DannyGarciaDEV/chatbotPython"target="_blank" > Danny AI Python </a></h3>
          <img src="/src/assets/chatbot.png"></img>
          <p>A simple Python chat bot that learns and responds based on user input. The bot uses a knowledge base stored in a JSON file.</p>
        </div>
        
        <div  className="project">
          <h3>  <a href="https://civicsreview.netlify.app/"target="_blank" > Civics Test </a></h3>
          <img src="/src/assets/civicstest.png"></img>
          <p>Learn the 100 questions for the civics test in English and Spanish!</p>
        </div>
      </div>
    );
  }
  