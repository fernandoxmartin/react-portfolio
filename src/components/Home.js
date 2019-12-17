import React, { Component } from "react";
import "../styles/Home.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Nav from "./Nav";
import { TimelineMax, gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
library.add(fab);

class Home extends Component {
  componentDidMount() {
    gsap.registerPlugin(CSSRulePlugin);
    let title = document.querySelector(".title-container");
    const left = CSSRulePlugin.getRule(
      ".home-container .center .center-content:before"
    );
    const right = CSSRulePlugin.getRule(
      ".home-container .center .center-content:after"
    );

    const tl = new TimelineMax();
    tl.from(title, 1, { y: -50 })
      .from(left, 0.5, {
        cssRule: {
          opacity: 0,
          top: "30%"
        }
      })
      .from(right, 0.5, {
        cssRule: {
          opacity: 0,
          top: "30%"
        }
      });
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
            <div className="center-content">
              <div className="title-container">
                <h1 className="title">Fernando</h1>
                <h2 className="subtitle">Software Developer</h2>
              </div>
            </div>
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
