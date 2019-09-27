import React from "react";
import SocialLinks from "../SocialLinks";
import "./Contact.css";

const Contact = props => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Contact <br />
              me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Then, use the form below or send an email to {" "}
              <span className="mail">
                joakim.berglind
                <i className="fas fa-at at" />
                gmail
                <i className="fas fa-circle dot" />
                com
              </span>
            </p>
          </div>
          <SocialLinks />
        </div>
        <form id="contact-form" action="#">
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" type="email" name="email" required />
          <textarea placeholder="Message" name="message" type="text" />
          <input className="button" id="submit" value="submit" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
