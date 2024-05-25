import React from "react";
import { SiJest } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { SiMui } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="head-portfolio">PORTFOLIO</h2>

      <div className="Card-Container">
        <div className="card">
          <div className="front">
            <div className="head">
              <img
                src="src/assets/img/multiStepForm.png"
                className="img"
                alt="multi-step-form"
              />
            </div>
            <h2 className="Title">MultiStep From</h2>
            <div className="card-Content">
              <p className="description">
                Developed a multi-step form solution for seamless data
                collection and user interaction, enhancing website engagement
                and usability.
              </p>

              <div className="icon-Container">
                <FaReact />
                <SiJest />
                <SiTypescript />
              </div>
            </div>
            <div className="card-Footer">
              <a
                className="visit-Page-Button"
                href="https://ali-multi-step-form.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                className="visit-Page-Button"
                href="https://github.com/alinosratipour/multi-stepForm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="back">
            <div className="card-Back-Footer">this is back</div>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <div className="head">
              <img
                src="src/assets/img/pizza.png"
                className="img3"
                alt="online food ordering"
              />
            </div>
            <h2 className="Title">Food Ordering</h2>
            <div className="card-Content">
              <p className="description">
                I built Food Ordering to help local takeaways accept online
                orders directly, freeing them from hefty commission fees charged
                by third-party platforms.
              </p>

              <div className="icon-Container">
                <SiPrisma />
                <GrGraphQl />
                <SiPostgresql />
                <SiTypescript />
                <SiDocker />
                <FaNodeJs />
              </div>
            </div>
            <div className="card-Footer">
              <a
                className="visit-Page-Button"
                href="https://mypizzaproject.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                className="visit-Page-Button"
                href="https://github.com/alinosratipour/pizza_project"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="back">
            <div className="card-Back-Footer">this is back</div>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <div className="head">
              <img
                src="src/assets/img/covid-19.png"
                className="black-and-white"
                alt="portfolio-site"
              />
            </div>
            <h2 className="Title">COVID-19 Monitor</h2>
            <div className="card-Content">
              <p className="description">
                Your COVID-19 app is useful because it provides real-time
                updates, statistics, and resources, helping users stay informed
                and safe during the pandemic
              </p>

              <div className="icon-Container">
                <FaReact />
                <BsBootstrap />
              </div>
            </div>
            <div className="card-Footer">
              <a
                className="visit-Page-Button"
                href="https://alinosratipour.github.io/Covid-19"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                className="visit-Page-Button"
                href="https://github.com/alinosratipour/Covid-19"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="back">
            <div className="card-Back-Footer">this is back</div>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <div className="head">
              <img
                src="src/assets/img/movie.png"
                className="img2"
                alt="movie app"
              />
            </div>
            <h2 className="Title">Movie App</h2>
            <div className="card-Content">
              <p className="description">
                I aimed to refine my Front-End Development skills and gain
                practical exposure to React context and API integration, using
                TVmaze to retrieve data on TV shows and episodes.
              </p>

              <div className="icon-Container">
                <FaReact />
                <SiMui />
              </div>
            </div>
            <div className="card-Footer">
              <a
                className="visit-Page-Button"
                href="https://ali-react-movie-app.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                className="visit-Page-Button"
                href="https://github.com/alinosratipour/react-movie-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="back">
            <div className="card-Back-Footer">this is back</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
