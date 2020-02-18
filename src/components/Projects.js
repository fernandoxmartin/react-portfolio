import React from "react";
import "../styles/Projects.scss";
import ballstats from "../images/nbastat.png";
import fxmweather from "../images/fxmw.png";
import guitarpedal from "../images/gp.png";
import fxmv2 from "../images/fxmweatherv2.png";
import jobtrackr from "../images/jobtrackr.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faEye);

function Projects() {
  return (
    <div className="project-container" id="projects">
      <div className="project">
        <div className="project-image">
          <img src={jobtrackr} alt="fxmweather" />
        </div>
        <div className="details">
          <p>
            A Job Tracking App to stay organized on your job hunt. Implemented
            with PassportJS for user authentication login/registration.
          </p>
          <ul>
            <li>Ejs / sass</li>
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
      <div className="project">
        <div className="project-image">
          <img src={fxmv2} alt="fxmweather" />
        </div>
        <div className="details">
          <p>
            A React Weather App that fetches JSON data from the OpenWeatherMap
            API to display the current weather and forecast at the desired
            location. Search by city name, or Zip Code.
          </p>
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
      <div className="project">
        <div className="project-image">
          <img src={guitarpedal} alt="guitar&pedal" />
        </div>
        <div className="details">
          <p>
            A Fictional Guitar Store built for pedal-heads. Browse through
            products and build your own combination. Add them to your shopping
            cart, edit and purchase your gear.
          </p>
          <ul>
            <li>HTML/CSS</li>
            <li>Javascript</li>
            <li>Jquery</li>
          </ul>
        </div>
        <div className="project-links">
          <a href="https://github.com/fernandoxmartin/guitar-and-pedal">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a href="https://fernandoxmartin.github.io/guitar-and-pedal">
            <FontAwesomeIcon icon={["fas", "eye"]} />
          </a>
        </div>
      </div>
      <div className="project">
        <div className="project-image">
          <img src={ballstats} alt="ballstats" />
        </div>
        <div className="details">
          <p>
            An Application designed to receive and compare NBA player stats.
            Compare players head-to-head and see the leaders on certain stats.
            JSON data implemented from BallDontLie API.
          </p>
          <ul>
            <li>HTML</li>
            <li>SASS</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div className="project-links">
          <a href="https://github.com/fernandoxmartin/ballstats">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a href="https://fernandoxmartin.github.io/ballstats">
            <FontAwesomeIcon icon={["fas", "eye"]} />
          </a>
        </div>
      </div>
      <div className="project">
        <div className="project-image">
          <img src={fxmweather} alt="fxmweather" />
        </div>
        <div className="details">
          <p>
            A Weather App that fetches JSON data from the OpenWeatherMap API to
            display the current information at the desired location. Search by
            city name, or Zip Code.
          </p>
          <ul>
            <li>HTML/CSS</li>
            <li>Javascript</li>
            <li>Node</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="project-links">
          <a href="https://github.com/fernandoxmartin/Node-Weather-App">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a href="https://fxmweather.herokuapp.com">
            <FontAwesomeIcon icon={["fas", "eye"]} />
          </a>
        </div>
      </div>
      <div className="more-projects">
        <a href="https://github.com/fernandoxmartin">View More Projects</a>
      </div>
    </div>
  );
}

export default Projects;
