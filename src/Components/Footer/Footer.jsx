import React from "react";
import SocialLinks from "../SocialLinks";
import "./Footer.css";

const Footer = props => {
  return (
    <footer>
      <div className="wrapper">
        <h3>THANK YOU FOR VISITING</h3>
        <p>{new Date().getFullYear()} Joakim Berglind.</p>
        <SocialLinks />
      </div>
    </footer>
  );
};
