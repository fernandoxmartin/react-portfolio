import React, { Component } from "react";
import "../styles/Nav.scss";
import { Link } from "react-scroll";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleNav = this.handleNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  handleNav() {
    let nav = this.refs.toggleNav;
    let logo = this.refs.fxm;
    let menu = this.refs.menu;
    if (!this.state.isOpen) {
      this.setState({ isOpen: true });
      nav.style.transform = "translateY(0%)";
      logo.style.color = "#000000";
      menu.style.stroke = "#000000";
    } else {
      this.setState({ isOpen: false });
      nav.style.transform = "translateY(-100%)";
      logo.style.color = "#ffffff";
      menu.style.stroke = "#ffffff";
    }
  }

  closeNav() {
    let nav = this.refs.toggleNav;
    let logo = this.refs.fxm;
    let menu = this.refs.menu;

    if (this.state.isOpen) {
      this.setState({ isOpen: false });
      nav.style.transform = "translateY(-100%)";
      logo.style.color = "#ffffff";
      menu.style.stroke = "#ffffff";
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
          <Link
            activeClass="active"
            className="nav-home"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h3 ref="fxm">FXM</h3>
          </Link>

          <div className="nav-links">
            <ul className="list">
              <Link
                activeClass="active"
                to="about"
                className="nav-about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span>01.</span>
                <li>About</li>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                className="nav-projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span>02.</span>
                <li>Projects</li>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                className="nav-contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span>03.</span>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <svg
            onClick={this.handleNav}
            className="menu"
            width="40"
            height="20"
            viewBox="0 0 43 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref="menu"
          >
            <line y1="1.5" x2="35" y2="1.5" strokeWidth="3" />
            <line y1="11.5" x2="35" y2="11.5" strokeWidth="3" />
          </svg>
        </div>

        <div className="open-nav" ref="toggleNav">
          <div className="nav-links-mobile">
            <ul className="list-mobile">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <li onClick={this.closeNav}>
                  <span>01. </span>About
                </li>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                <li onClick={this.closeNav}>
                  <span>02. </span>Projects
                </li>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <li onClick={this.closeNav}>
                  <span>03. </span>Contact
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
