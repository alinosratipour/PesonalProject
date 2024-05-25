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
          <div className="photo"></div>

          <p className="about-text">
            Hi there! I'm Ali Nosratipour, and I love working with people and
            tackling challenges head-on. I'm great at collaborating and always
            find it easy to get along with others, which helps create a fun and
            productive team vibe. Problem-solving is my jam, and I'm always on
            the lookout for new things to learn and ways to grow. I also have a
            good grasp of the business side of things and love sharing ideas on
            how to make things better. Whether we're working on a project
            together or brainstorming fresh solutions, I’m all about achieving
            awesome results.
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
