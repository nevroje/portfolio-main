import React from "react";
import Project from "./Project";
import "./Project.css";
import FlexPanelImg from './Images/FlexPanelImg.jpg';

// todo import project images

const Projects = props => {
  return (
    <section id="projects-container">
      <div className="heading">
        <h3 className="title">My Projects</h3>
        <p className="separator" />
        <p className="subtitle">
          Here's a list of Projects i have been working on lately. Some are from
          my Bootcamp at
          <a
            href="https://www.craftacademy.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Craft Academy
          </a>
          , There i learned to code for about 4 months until i became a
          Full-Stack Developer, i have now coded for almost 7 months and i
          strive to learn more every day.
        </p>
      </div>
      <div className="projects-wrapper">
        <Project
          title="Flex Panels."
          img={FlexPanelImg}
          tech="js css"
          link="https://stupefied-benz-66a33f.netlify.com/"
          repo="https://github.com/nevroje/Flex-panels"
        >
          <small>Built with pure ES6 and CSS.</small>
          <p>
            This is a small side project where i utilize the power of vanilla
            css and javascript, you can click and feel the images!.
          </p>
        </Project>
      </div>
    </section>
  );
};

export default Projects;
