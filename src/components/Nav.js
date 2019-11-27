import React from "react";
import "../styles/Nav.scss";

function Nav() {
  return (
    <nav>
      <div className="nav-header">
        <a href="/home" className="logo">
          FM
        </a>
        <svg
          class="menu"
          width="43"
          height="23"
          viewBox="0 0 43 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1.5" x2="43" y2="1.5" stroke="white" stroke-width="3" />
          <line y1="11.5" x2="35" y2="11.5" stroke="white" stroke-width="3" />
        </svg>
      </div>
    </nav>
  );
}

export default Nav;
