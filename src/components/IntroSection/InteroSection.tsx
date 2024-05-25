import React from "react";
import "./InteoSection.scss";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";

const IntroSection = () => {
  return (
    <section className="home" id="home">
      <div id="overlay">
        <ParticlesBackground />
      </div>

      <h1 className="heading">
        <span className="ali">Ali</span>{" "}
        <span className="sure-Name">NosratiPour</span>
      </h1>
      <p className="Intro-Text">
        Hi there! I'm a London-based Full-Stack Developer with three years of
        commercial experience. I thrive in both agile team environments and
        freelance settings, delivering end-to-end solutions using technologies
        like React, Node.js, and GraphQL. What sets me apart is my ability to
        blend technical expertise with a deep understanding of business domains
        and logic. This unique combination allows me to drive meaningful
        business impact, whether I'm coding or contributing strategic insights.
      </p>
    </section>
  );
};

export default IntroSection;
