import React, { Component } from "react";
import "../styles/About.scss";
import Nav from "./Nav";

class About extends Component {
  render() {
    return (
      <div className="pages">
        <Nav />
        <div className="about-container">
          <div className="about-container-inner">
            <div className="about-left"></div>
            <div className="about-right">
              <p className="summary">
                Based in Greater Los Angeles Area, I enjoy building things that
                live on the internet. I develop websites and web apps with
                enthusiasm for detail and design. Graduated with a{" "}
                <span className="highlight">B.S. in Computer Science</span> from
                CSUSB.
              </p>
              <div className="summary-skills">
                <p>Here's a few technologies I'm familiar with:</p>
                <ul>
                  <li>HTML / [S]CSS</li>
                  <li>javascript</li>
                  <li>React</li>
                  <li>node</li>
                  <li>express</li>
                  <li>jquery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
