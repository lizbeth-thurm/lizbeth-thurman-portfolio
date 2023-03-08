import React from "react";
import "../PSOne/PSone.css";

const Navigation = () => {
  return (
    <div class="container">
      <label class="title">Navigation</label>
      <div style={{display: "flex", justifyContent: "center"}}>
        <p>About Me</p>
        <p>Projects</p>
        <p>Contact</p>
        <p>Resume</p>
      </div>
    </div>
  );
};

export default Navigation;
