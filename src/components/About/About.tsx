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
          <div className="photo">
            
          </div>

          <p className="about-text">
            I'm Ali Nosratipour, a Full-Stack developer from London. I have a
            strong desire to be a better developer and have an instinct for good
            design, with a high ambition to learn new skills. I have the
            enthusiasm and passion to create things that are beautiful,
            functional and eye-catching.
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
              I can develop a website in plain HTML/CSS and vanilla javascript
              or use libraries and frameworks like React or bootstrap. When it
              comes to backend I also have hands-on experience using some of the
              backend technologies such as express.js and Node.js.
            </p>
          </div>
          <div className="services-4">
            <h2 className="title">Performance Testing</h2>
            <p className="service-Description">
              I understand how important is to make sure that the website
              performs smoothly without any malfunction. optimizing images and
              minifying CSS and JavaScript and testing across different browsers
              are the steps I take to reduce website loading time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
