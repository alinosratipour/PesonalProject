import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import "./Skills.scss";

const Skills = () => {
  return (
    <div>

      <section className="Skills-Section" id="skills">
      <h2 className="head-title">SKILLS</h2>
       <div className="Skill-Box-Container">
        <div className="mybox  box-1 ">
          <span className="Icon">
            {" "}
            <FaReact />
          </span>
          <h6>Front End </h6>

          <ul className="skill-list">
            <li className="skill-name">HTML/CSS</li>
            <li className="skill-name">JavaScript & Typescript</li>
            <li className="skill-name">Responsive Design</li>
            <li className="skill-name">TDD and Automated Testing</li>
            <li className="skill-name">React</li>
          </ul>
        </div>
        <div className="mybox  box-2">
          <span className="Icon">
            <FaNodeJs />
          </span>
          <h6>Back End</h6>
          <ul className="skill-list">
            <li className="skill-name">Node.js</li>
            <li className="skill-name">Express.js</li>
            <li className="skill-name">GraphQL</li>
            <li className="skill-name">PostgreSQL</li>
            <li className="skill-name">Apollo Server</li>
          </ul>
        </div>

        <div className="mybox  box-3 ">
          <div className="git">
            <span className="Icon">
              <FaDocker />
            </span>
          </div>
          <h6 className="skill-header">DevOps</h6>
          <ul className="skill-list">
            <li className="skill-name">GitHub Actions</li>
            <li className="skill-name">Docker</li>
            <li className="skill-name">Terraform</li>
            <li className="skill-name">Amazon Web Services (AWS)</li>
            <li className="skill-name">Kubernetes</li>
          </ul>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
