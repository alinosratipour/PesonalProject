import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about-wrapper">
      <section className="about" id="about">
        <div className="about-title">
          <h2 className="title-1">ABOUT</h2>
        </div>
        <div className="Photo-Container">
          {/* <div className="photo"></div> */}
          <img src="/assets/img/ali4.jpg" alt="ali" className="photo" />
          <p className="about-text">
            I'm Ali Nosratipour, a Full-Stack developer based in London with a
            passion for coding and an insatiable curiosity. I excel in
            problem-solving, adaptability, and resilience, thriving in dynamic
            environments and always eager to learn new technologies. My journey
            is driven by a desire to create meaningful, impactful work and
            continuously grow and improve.
          </p>
        </div>
        <div className="what-i-do">
          <h2>WHAT I DO</h2>
        </div>
        <div className="flex-wrapper">
          <div className="services">
            <h2 className="title">Prototyping</h2>
            <p className="service-Description">
              I research the client's business, competitors, and customers, then
              draft an initial prototype using wireframing tools like Figma. My
              first step is to sit down with the client and ensure everything is
              covered, such as the structure of the site, user experience, and
              responsiveness across all devices.
            </p>
          </div>

          <div className="sevices-2">
            <h2 className="title">PSD/XD Slicing </h2>
            <p className="service-Description">
              I excel at converting designs from XD, PSD, or Figma into
              pixel-perfect HTML, CSS, and JavaScript code. My focus on detail
              ensures clean, reliable, and readable code, guaranteeing top-notch
              web experiences.
            </p>
          </div>
        </div>

        <div className="flex-wrapper-2">
          <div className="services-3">
            <h2 className="title">Frontend development</h2>
            <p className="service-Description">
              I excel in constructing visually captivating websites using HTML,
              CSS, and JavaScript. Proficient in libraries like React and
              frameworks such as Bootstrap, I ensure seamless user experiences
              and intuitive interfaces.
            </p>
          </div>
          <div className="services-4">
            <h2 className="title">Backend Development</h2>
            <p className="service-Description">
              I specialise in backend development, proficient in Node.js,
              PostgreSQL, Apollo Server, and GraphQL. My expertise lies in
              crafting scalable and efficient backend solutions, ensuring
              seamless integration and optimal performance for web applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
