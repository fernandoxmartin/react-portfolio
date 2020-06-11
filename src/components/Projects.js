import React from "react";
import "../styles/Projects.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import proj1a from "../images/1a.png";
import proj1b from "../images/1b.png";
import proj2a from "../images/2a.png";
import proj2b from "../images/2b.png";
import proj3a from "../images/6a.png";
import proj3b from "../images/6b.png";
library.add(fab, faEye);

function Projects() {
  return (
    <div className="project-container" id="projects">
      <div className="section-title">
        <h1>Projects </h1>
        <svg height="5" width="200">
          <line x1="10" y1="0" x2="200" y2="0" stroke="white" strokeWidth={5} />
        </svg>
      </div>
      <div className="project">
        <div className="project-image">
          <img className="a-img" src={proj1a} alt="jobtrackr" />
          <img className="b-img" src={proj1b} alt="jobtrackr-mobile" />
        </div>
        <div className="details">
          <div className="project-title">
            <h4>Featured Project</h4>
            <h1>Job Trackr</h1>
          </div>

          <div className="project-desc">
            <p>
              An app to help you stay organized on your job hunt. Add, delete,
              and update your applications. Implemented with PassportJS and
              MongoDB for user authentication login/signup.
            </p>
          </div>
          <div className="project-stack">
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>Passport</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="project-links">
            <a href="https://github.com/fernandoxmartin/job-trackr">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a href="https://trackr-job.herokuapp.com/">
              <FontAwesomeIcon icon={["fas", "eye"]} />
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-image">
          <img className="a-img" src={proj2a} alt="fxmweather" />
          <img className="b-img" src={proj2b} alt="fxmweather-mobile" />
        </div>
        <div className="details">
          <div className="project-title">
            <h4>Featured Project</h4>
            <h1>FXM Weather</h1>
          </div>
          <div className="project-desc">
            <p>
              A React Weather App that fetches JSON data from the OpenWeatherMap
              API to display the current weather and forecast at the desired
              location. Search by city name, or Zip Code.
            </p>
          </div>
          <div className="project-stack">
            <ul>
              <li>React</li>
              <li>Sass</li>
              <li>Node</li>
              <li>Express</li>
            </ul>
          </div>
          <div className="project-links">
            <a href="https://github.com/fernandoxmartin/fxm-weather">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a href="https://aqueous-shore-69477.herokuapp.com/">
              <FontAwesomeIcon icon={["fas", "eye"]} />
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-image">
          <img className="a-img" src={proj3a} alt="guitar-pedal" />
          <img className="b-img" src={proj3b} alt="guitar-pedal-mobile" />
        </div>
        <div className="details">
          <div className="project-title">
            <h4>Featured Project</h4>
            <h1>Guitar & Pedal</h1>
          </div>
          <div className="project-desc">
            <p>
              A Fictional online guitar store built for guitar and pedalboard
              enthusiast. Browse through products and build your own
              combination. Add them to your shopping cart, edit and purchase
              your gear.
            </p>
          </div>
          <div className="project-stack">
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Javascript</li>
              <li>SASS</li>
            </ul>
          </div>
          <div className="project-links">
            <a href="https://github.com/fernandoxmartin/guitar-pedal">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a href="https://guitar-pedal.netlify.app/">
              <FontAwesomeIcon icon={["fas", "eye"]} />
            </a>
          </div>
        </div>
      </div>

      <div className="more-projects">
        <a href="https://github.com/fernandoxmartin">View More Projects</a>
      </div>
    </div>
  );
}

export default Projects;
