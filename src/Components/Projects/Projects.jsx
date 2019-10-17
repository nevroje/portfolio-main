import React from "react";
import Project from "./Project";
import "./Project.css";
import FlexPanelImg from "./Images/FlexPanelImg.jpg";
import DirtyLaundry from "./Images/DirtyLaundry.jpg";
import portfolio from "./Images/portfolio.jpg";
import RockPaperScissors from "./Images/RockPaperScissors.jpg"

// todo import project images

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Projects</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of Projects I have been working on lately. Some are
            from my Bootcamp at{" "}
            <a
              href="https://www.craftacademy.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CraftAcademy
            </a>
            , There I learned to code for about 4 months until I became a
            Full-Stack Developer, I have now coded for almost 7 months and I
            strive to learn more every day.
          </p>
        </div>
        <div className="projects-wrapper">
        <Project
            title="Portfolio"
            img={portfolio}
            tech="js css react"
            link="https://joakimberglind.netlify.com/"
            repo="https://github.com/nevroje/portfolio-main"
          >
            <small>Built with React</small>
            <p>
              Portfolio website I built with React.
            </p>
          </Project>
          <Project
            title="Flex Panels."
            img={FlexPanelImg}
            tech="js css"
            link="https://stupefied-benz-66a33f.netlify.com/"
            repo="https://github.com/nevroje/Flex-panels"
          >
            <small>Built with pure ES6 and CSS.</small>
            <p>
              This is a small side project where I utilize the power of vanilla
              css and javascript, you can click and feel the images!
            </p>
          </Project>
          <Project
            title="Laundry Booking."
            img={DirtyLaundry}
            tech="Ruby on Rails css"
            link="https://dirty-laundry-2019.herokuapp.com/"
            repo="https://github.com/CraftAcademy/dirty-laundry-team1-2019"
          >
            <small>Built using Ruby on Rails, CSS, Facebook OAUTH, TDD, and we used CI/CD from Semaphore.</small>
            <p>
              This is a group project from my bootcamp, The idea was that if you
              live in an apartment building you can use this app to book laundry
              times.
            </p>
          </Project>
          <Project
            title="Rock paper scissors"
            img={RockPaperScissors}
            tech="js css"
            link="https://rockpaperjedi.netlify.com/"
            repo="https://github.com/nevroje/rockpaperscissors"
          >
            <small>Built with vanilla ES6 and CSS</small>
            <p>
              Rock paper scissors with a twist.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;
