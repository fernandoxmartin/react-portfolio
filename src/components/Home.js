import React from "react";
import "../styles/Home.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Nav from "./Nav";

library.add(fab);

function Home() {
  return (
    <div className="pages">
      <Nav />
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
        </div>

        <div className="contact">
          <a href="mailto: fmartin883@gmail.com">fmartin883@gmail.com</a>
          <svg height="200" width="100">
            <line x1="50" y1="10" x2="50" y2="200" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
