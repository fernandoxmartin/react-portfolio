import React, { Component } from "react";
import "../styles/Nav.scss";
import { Link } from "react-scroll";
import logo from "../images/logo.png";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleNav = this.handleNav.bind(this);
  }

  handleNav() {
    let nav = this.refs.toggleNav;
    if (!this.state.isOpen) {
      this.setState({ isOpen: true });
      nav.style.transform = "translateY(0%)";
    } else {
      this.setState({ isOpen: false });
      nav.style.transform = "translateY(-100%)";
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 100;
      const nav = document.getElementById("nav");
      if (isTop) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <nav id="nav">
        <div className="nav-header">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>

          <div className="nav-links">
            <ul className="list">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span>01.</span>
                <li>Home</li>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span>02.</span>
                <li>About</li>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span>03.</span>
                <li>Projects</li>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span>04.</span>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <svg
            onClick={this.handleNav}
            className="menu"
            width="43"
            height="23"
            viewBox="0 0 43 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1.5" x2="43" y2="1.5" stroke="white" strokeWidth="3" />
            <line y1="11.5" x2="35" y2="11.5" stroke="white" strokeWidth="3" />
          </svg>
        </div>

        <div className="open-nav" ref="toggleNav">
          <div className="nav-links-mobile">
            <ul className="list-mobile">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <li>
                  <span>01. </span>Home
                </li>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <li>
                  <span>02. </span>About
                </li>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                <li>
                  <span>03. </span>Projects
                </li>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <li>
                  <span>04. </span>Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
