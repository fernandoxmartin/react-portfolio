import React, { Component } from "react";
import "../styles/Home.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Nav from "./Nav";
import { TimelineMax } from "gsap";
library.add(fab);

class Home extends Component {
  componentDidMount() {
    const tl = new TimelineMax();
    tl.fromTo(".nav-home", 0.2, { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
      .fromTo(".nav-about", 0.2, { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
      .fromTo(
        ".nav-projects",
        0.2,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0 }
      )
      .fromTo(
        ".nav-contact",
        0.2,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0 }
      )
      .fromTo(".F", 0.5, { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
      .fromTo(".X", 0.5, { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
      .fromTo(".M", 0.5, { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
      .fromTo(".center h3", 0.5, { opacity: 0, y: 100 }, { opacity: 1, y: 0 });
  }

  render() {
    return (
      <div className="pages" id="home">
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
            <svg className="line" height="200" width="100">
              <line x1="50" y1="10" x2="50" y2="200" />
            </svg>
          </div>

          <div className="center">
            <div className="fxm">
              <div className="F">F</div>
              <div className="X">X</div>
              <div className="M">M</div>
            </div>
            <h3>Software Developer</h3>
          </div>

          <div className="contact">
            <a href="mailto: fxmcontact@gmail.com">fxmcontact@gmail.com</a>
            <svg className="line" height="200" width="100">
              <line x1="50" y1="10" x2="50" y2="200" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
