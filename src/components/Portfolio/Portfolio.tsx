import React, { useState } from "react";
import Modal from "../UILibrary/Modal/Modal";
import "./Portfolio.scss";

const Portfolio = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalId: string) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

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
              <p>
                Developed a multi-step form solution for seamless data
                collection and user interaction, enhancing website engagement
                and usability.
              </p>
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
              <p>
                I built Food Ordering to help local takeaways accept online
                orders directly, freeing them from hefty commission fees charged
                by third-party platforms.
              </p>
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
              <p>
                Your COVID-19 app is useful because it provides real-time
                updates, statistics, and resources, helping users stay informed
                and safe during the pandemic
              </p>
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
              <p>
                I aimed to refine my Front-End Development skills and gain
                practical exposure to React context and API integration, using
                TVmaze to retrieve data on TV shows and episodes.
              </p>
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

      {activeModal === "multiStepForm" && (
        <Modal onClose={closeModal}>
          <header className="mod-header">
            <h2 className="mod-title">Multi Step Form</h2>
            <button className="mod-close" onClick={closeModal}>
              &times;
            </button>
          </header>
          <div className="text-Container">
            <p className="description">
              I have developed a multi-step form project using React, Vite, Zod,
              and control statements. The main objective of this project was to
              challenge and improve my advanced React skills while delivering a
              dynamic and interactive user experience.
            </p>
            <ul>
              <li>
                <strong>Technologies:</strong> React, Vite, Typescript, Jest,
                Zod
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
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </Modal>
      )}

      {activeModal === "monsoon" && (
        <Modal onClose={closeModal}>
          <header className="mod-header">
            <h2 className="mod-title">Monsoon</h2>
            <button className="mod-close" onClick={closeModal}>
              &times;
            </button>
          </header>
          <div className="text-Container">
            <p className="discription">
              A takeaway and delivery restaurant in North London, Monsoon
              specializes in Indian cuisine. Initially, they exclusively
              accepted online orders via Just Eat. However, they've recently
              launched their proprietary online ordering platform. This new
              system enables customers to place orders directly, eliminating the
              need to pay commissions to Just Eat.
            </p>
            <ul>
              <li>
                <strong>Technologies:</strong> PHP, HTML/CSS, JAVASCRIPT
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
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </Modal>
      )}

      {activeModal === "portfolioSite" && (
        <Modal onClose={closeModal}>
          <header className="mod-header">
            <h2 className="mod-title">Portfolio Site</h2>
            <button className="mod-close" onClick={closeModal}>
              &times;
            </button>
          </header>
          <div className="text-Container">
            <p className="description">
              I cloned this fully responsive portfolio site from wix.com with my
              coding skills. Creating a clone of this website that looked and
              felt as close as possible to its original design was the goal of
              this project.
            </p>
            <ul>
              <li>
                <strong>Technologies:</strong> HTML, CSS, JavaScript, Bootstrap
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
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </Modal>
      )}

      {activeModal === "movieApp" && (
        <Modal onClose={closeModal} title="Movie App">
          <div className="text-Container">
            <p className="description">
              I embarked on this project with the goal of honing my Front-End
              Development skills while also gaining hands-on experience in
              working with React context and API integration. In this endeavor,
              I leveraged TVmaze to fetch information about TV shows and their
              associated episodes.
            </p>
            <ul>
              <li>
                <strong>Technologies:</strong> React, Material UI
              </li>
              <li>
                <strong>Date completed:</strong> January 2022
              </li>
            </ul>
          </div>
          <div className="footer">
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
              href="https://ali-react-movie-app.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Portfolio;
