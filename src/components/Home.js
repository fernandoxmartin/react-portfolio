import React from "react";
import "../styles/Home.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function Home() {
  return (
    <div className="home-container">
      <div className="social">
        <a href="https:///github.com/fernanxomartin">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>

        <a href="https://linkedin.com/in/fxm">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a href="https://instagram.com/fernandomania">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
        <svg height="200" width="100">
          <line x1="50" y1="10" x2="50" y2="200" />
        </svg>
      </div>

      <div className="center">
        <div className="title">
          <h2 className="sub-title">HELLO, I'M</h2>
          <h1 className="name-title">FERNANDO</h1>
          <h2 className="sub-title">SOFTWARE DEVELOPER</h2>
        </div>
        <p className="summary">
          Based in Greater Los Angeles Area, I enjoy building things that live
          on the internet. I develop websites and web apps with enthusiasm for
          detail and design. Graduated with a{" "}
          <span className="highlight">B.S. in Computer Science</span> from
          CSUSB.
        </p>
        <div class="summary-skills">
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

      <div className="contact">
        <a href="mailto: fmartin883@gmail.com">fmartin883@gmail.com</a>
        <svg height="200" width="100">
          <line x1="50" y1="10" x2="50" y2="200" />
        </svg>
      </div>
    </div>
  );
}

export default Home;
