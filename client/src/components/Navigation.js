import React from "react";
import "../PSOne/PSone.css";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  return (
    <div>
      <h3>Navigation</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>
          <HashLink smooth to="/lizbeth-thurman-portfolio/#about-me">
            About Me
          </HashLink>
        </p>
        <p>
          <HashLink smooth to="/lizbeth-thurman-portfolio/#projects">
            Projects
          </HashLink>
        </p>
        <p>
          <HashLink smooth to="/lizbeth-thurman-portfolio/#contact">
            Contacts
          </HashLink>
        </p>
        <p>
          <HashLink smooth to="/lizbeth-thurman-portfolio/#resume">
            Resume
          </HashLink>
        </p>
      </div>
    </div>
  );
};

export default Navigation;
