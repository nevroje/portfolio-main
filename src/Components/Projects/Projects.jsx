import React from "react";
import Project from "./Project";
import "./Project.css";

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
      {/* Todo: Add projects */}
    </section>
  );
};
