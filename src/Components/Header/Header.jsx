import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="moon" />
      <div className="container">
      {/* <h1>
        <span className="line">I</span>
        <span className="line">Code</span>
      </h1> */}
      <div className="buttons">
        <a href="#projects">my portfolio</a>
        <a href="#contact" className="cta">
          get in touch
        </a>
      </div>
      </div>
    </header>
  );
};

export default Header;
