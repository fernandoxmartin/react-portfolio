import React from "react";
import "../styles/Projects.scss";
import ballstats from "../images/nbastat.png";
import beatblocks from "../images/bb.png";
import fxmweather from "../images/fxmw.png";
import guitarpedal from "../images/gp.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";

library.add(fab, faEye);

function Projects() {
  return (
    <div className="pages">
      <Nav />
      <div className="project-page">
        <h1>projects</h1>
        <div className="project-container">
          <div className="project">
            <div className="project-image">
              <img src={fxmweather} alt="fxmweather" />
            </div>
            <div className="details">
              <p>
                A Weather App that fetches JSON data from the OpenWeatherMap API
                to display the current information at the desired location.
                Search by city name, or Zip Code.
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
          <div className="project">
            <div className="project-image">
              <img src={guitarpedal} alt="guitar&pedal" />
            </div>
            <div className="details">
              <p>
                A Fictional Guitar Store built for pedal-heads. Browse through
                products and build your own combination. Add them to your
                shopping cart, edit and purchase your gear.
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
                Compare players head-to-head and see the leaders on certain
                stats. JSON data implemented from BallDontLie API.
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
              <img src={beatblocks} alt="beatblocks" />
            </div>
            <div className="details">
              <p>
                A simple application to create and play music. <br />
                Fun animations on click for your amusement.
              </p>
              <ul>
                <li>HTML/CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
            <div className="project-links">
              <a href="https://github.com/fernandoxmartin/beat-maker-animation">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <a href="https://fernandoxmartin.github.io/beat-maker-animation/">
                <FontAwesomeIcon icon={["fas", "eye"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
