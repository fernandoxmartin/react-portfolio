import React, { Component } from "react";
import "../styles/About.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import jQuery from "../images/jquery.svg";
library.add(fab);

class About extends Component {
  render() {
    return (
      <div className="about-container" id="about">
        <div className="about-container-inner">
          <div className="about-left"></div>
          <div className="about-right">
            <p id="summary" className="summary">
              Based in Greater Los Angeles Area, I enjoy building things that
              live on the internet. I develop websites and web apps with
              enthusiasm for detail and design. Graduated with a{" "}
              <span className="highlight">B.S. in Computer Science</span> from
              CSUSB.
            </p>
            <div className="summary-skills">
              <p>Here's a few technologies I'm familiar with:</p>
              <br />
              <ul>
                <FontAwesomeIcon icon={["fab", "html5"]} />
                <FontAwesomeIcon icon={["fab", "css3"]} />
                <FontAwesomeIcon icon={["fab", "sass"]} />
                <FontAwesomeIcon icon={["fab", "js"]} />
                <FontAwesomeIcon icon={["fab", "react"]} />
                <FontAwesomeIcon icon={["fab", "node"]} />
                <img src={jQuery} alt="jquery" width="50px" color="orange" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
