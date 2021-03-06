import React from "react";
import "./About.css";

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who am I?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Joakim.</h4>
            <p>I am a Full Stack Web Developer based in Stockholm Sweden.</p>
            <p>
              And I am a really curiousity based person when it comes to
              learning, solving problems and making web apps pretty, easy to use
              and manageable. My hobbies are Gaming, hanging out with friends
              and learning, I cant stop learning!
            </p>
          </div>
          <div className="title">
            <h3>What I do</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              In the front-end I work with Javascript, React or Ruby On Rails. I
              also make the website look better using CSS or if a framework is
              needed: Bootstrap, Semantic UI, etc.
            </p>
            <p>
              For the back-end I mostly work with Node.js, Express, I am in the
              process of learning SQL and MongoDB.
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Design.</h4>
            <p>
              Creating Full-Stack Applications that are easy to use and look
              pretty is important to me.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
