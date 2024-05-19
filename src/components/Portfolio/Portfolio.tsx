import React from "react";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="head-portfolio">PORTFOLIO</h2>
<div className="Card-Container">
      <div className="box card-1">
        <img src="src/assets/img/multiStepForm.png" className="img" alt="" />

        <div className="overlay">
          <div className="content">Multi Step Form </div>
          <a href="#myy-mod" className="mod-fire">
            Read More
          </a>
        </div>
      </div>

      <div className="box card-1">
        <img src="../img/monsoon.jpg" className="img3" alt="" />
        <div className="overlay  ">
          <div className="content">Monsoon </div>
          <a href="#myy-mod2" className="mod-fire">
            Read More
          </a>
        </div>
      </div>

      <div className="box card-1">
        <img src="../img/frontEnd-Montor.png" className="img" alt="" />
        <div className="overlay  ">
          <div className="content">Portfolio Site</div>
          <a href="#myy-mod1" className="mod-fire">
            Read More
          </a>
        </div>
      </div>

      <div className="box card-1">
        <img src="src/assets/img/movie.png" className="img2" alt="" />
        <div className="overlay  ">
          <div className="content">Movie App</div>
          <a href="#myy-mod3" className="mod-fire">
            Read More
          </a>
        </div>
      </div>
      </div>
      {/* Start of Modals Window */}
      <div className="my-mod" id="myy-mod">
        <div className="mod-dialog">
          <section className="mod-content">
            <header className="mod-header">
              <h2 className="mod-title"> Multi Step Form </h2>
              <a className="mod-close" href="#portfolio">
                &times;
              </a>
            </header>
            <div className="mod-body">
              <p className="mod-text">
                I have developed a multi-step form project using React, Vite,
                Zod, and control statements. The main objective of this project
                was to challenge and improve my advanced React skills while
                delivering a dynamic and interactive user experience.
              </p>
              <ul>
                <li>
                  <strong>Technologies:</strong> React,Vite,Typescript,Jest,Zod
                </li>
                <li>
                  <strong>Date completed:</strong> September 2023
                </li>
              </ul>
            </div>
            <div className="footer">
              <a
                className="visit-page"
                href="https://ali-multi-step-form.netlify.app"
                target="_blank"
              >
                Visit Site
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Start of Modals Window */}
      <div className="my-mod" id="myy-mod1">
        <div className="mod-dialog">
          <section className="mod-content">
            <header className="mod-header">
              <h2 className="mod-title"> Portfolio Site</h2>
              <a className="mod-close" href="#portfolio">
                &times;
              </a>
            </header>
            <div className="mod-body">
              <p className="mod-text">
                I cloned this fully responsive portfolio site from wix.com with
                my coding skills. Creating a clone of this website that looked
                and felt as close as possible to its original design was the
                goal of this project.
              </p>
              <ul>
                <li>
                  <strong>Technologies:</strong> HTML,CSS,JavaScript,Bootsrap
                </li>
                <li>
                  <strong>Date completed:</strong> November 2021
                </li>
              </ul>
            </div>
            <div className="footer">
              <a
                className="visit-page"
                href="https://boostrap-london-className7-ali-nosratipour.netlify.app/index.html"
                target="_blank"
              >
                Visit Site
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className="my-mod" id="myy-mod2">
        <div className="mod-dialog">
          <section className="mod-content">
            <header className="mod-header">
              <h2 className="mod-title">Monsoon</h2>
              <a className="mod-close" href="#portfolio">
                &times;
              </a>
            </header>
            <div className="mod-body">
              <p className="mod-text">
                A takeaway and delivery restaurant in North London, Monsoon
                specializes in Indian cuisine. Initially, they exclusively
                accepted online orders via Just Eat. However, they've recently
                launched their proprietary online ordering platform. This new
                system enables customers to place orders directly, eliminating
                the need to pay commissions to Just Eat.
              </p>
              <ul>
                <li>
                  <strong>Technologies:</strong> PHP, HTML/CSS, JAVASCRIPT{" "}
                </li>
                <li>
                  <strong>Date completed:</strong> January 2021
                </li>
              </ul>
            </div>
            <div className="footer">
              <a
                className="visit-page"
                href="http://monsoon-indian.co.uk"
                target="_blank"
              >
                Visit Site
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className="my-mod" id="myy-mod3">
        <div className="mod-dialog">
          <section className="mod-content">
            <header className="mod-header">
              <h2 className="mod-title">Movie App</h2>
              <a className="mod-close" href="#portfolio">
                &times;
              </a>
            </header>
            <div className="mod-body">
              <p className="mod-text">
                I embarked on this project with the goal of honing my Front-End
                Development skills while also gaining hands-on experience in
                working with React context and API integration. In this
                endeavor, I leveraged TVmaze to fetch information about TV shows
                and their associated episodes.
              </p>
              <ul>
                <li>
                  <strong>Technologies:</strong> React,Material UI
                </li>
                <li>
                  <strong>Date completed:</strong> January 2022
                </li>
              </ul>
            </div>
            <div className="footer">
              <a
                className="visit-page"
                href="https://ali-react-movie-app.netlify.app"
                target="_blank"
              >
                Visit Site
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
