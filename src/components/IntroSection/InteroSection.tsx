import React from "react";
import "./InteoSection.scss";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";
const IntroSection = () => {
  return (
    <div className="test">
      <section className="home" id="home">
        <div id="overlay">
          <ParticlesBackground />
        </div>

        <h1 className="heading">
          <span className="ali">Ali</span>{" "}
          <span className="sure-Name">NosratiPour</span>
        </h1>
        <p className="Intro-Text">
          I'm Ali Nosratipour, a London-based Full-Stack Developer with three
          years of commercial experience. I excel in both agile team
          environments and freelance settings, delivering end-to-end solutions
          using technologies like React, Node.js, and GraphQL. Beyond coding, I
          bring a deep understanding of business domains and logic, leveraging
          this insight to drive meaningful business impact.
        </p>
      </section>
    </div>
  );
};

export default IntroSection;
