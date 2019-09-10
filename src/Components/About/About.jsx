import React from "react";
import "./About.css";

const About = props => {
  return (
    <section id="about">
      <div className="title">
        <h3>Who am i?</h3>
        <p className="separator" />
      </div>
      <div className="full-desc">
        <h4>My name is Joakim.</h4>
        <p>I am a Full Stack Web Developer based in Stockholm Sweden.</p>
        <p>
          And i am a really curiousity based person when it comes to learning,
          solving problems and making web apps pretty, easy to use and
          manageable. My hobbies are Gaming, hanging out with friends and
          learning, i cant stop learning!
        </p>
      </div>
      <div className="title">
        <h3>What i do</h3>
        <p className="separator" />
      </div>
      <div className="desc">
        <h4 className="subtitle">I'm a programmer.</h4>
        <p>
          In the front-end i work with Javascript, React or Ruby On Rails. I
          also make the website look better using CSS or if a framework is
          needed: Bootstrap, Semantic UI, etc.
        </p>
        <p>
          For the back-end i mostly work with Node.js, Express, i am in the
          process of learning SQL and MongoDB.
        </p>
      </div>
    </section>
  );
};
