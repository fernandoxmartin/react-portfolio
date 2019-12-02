import React, { Component } from "react";
import "../styles/Nav.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleNav = this.handleNav.bind(this);
  }

  handleNav() {
    let nav = this.refs.toggleNav;
    if (this.state.isOpen === false) {
      this.setState({ isOpen: true });
      nav.style.transform = "translateY(0%)";
    } else {
      this.setState({ isOpen: false });
      nav.style.transform = "translateY(-100%)";
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-header">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>

          <div className="nav-links">
            <ul className="list">
              <Link to="/">
                <span>01.</span>
                <li>Home</li>
              </Link>
              <Link to="/about">
                <span>02.</span>
                <li>About</li>
              </Link>
              <Link to="/projects">
                <span>03.</span>
                <li>Projects</li>
              </Link>
              <Link to="/contact">
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
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/projects">
                <li>Projects</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
