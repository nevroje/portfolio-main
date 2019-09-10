import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container" />
      <div className="buttons">
        <a href="#projects">My portfolio</a>
        <a href="#contact" className="cta">
          get in touch
        </a>
      </div>
    </header>
  );
};

export default Header;
