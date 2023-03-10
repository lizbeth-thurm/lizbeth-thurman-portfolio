import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Project from "../components/Project";
import Resume from "../components/Resume";
import "../PSOne/PSone.css";
import profile_pic from "../media/profile_pic.jpg";
import cinemate_screenshot from "../media/cinemate_screenshot.png";
import bestiary_screenshot from "../media/bestiary_screenshot.png";
import thurman_resume from "../media/Thurman-Resume-March-2023.pdf";
import myhep_screenshot from "../media/myhep_screenshot.png";

const Home = () => {
  return (
    <div
      style={{
        background: "linear-gradient(teal, purple)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
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

      <h2>Skipper Lizbeth Thurman</h2>

      <img
        style={{
          borderStyle: "solid",
          borderWidth: "10",
          maxWidth: "300px",
        }}
        src={profile_pic}
        alt="Skipper Lizbeth Thurman"
      />

      <h3>Full-Stack Web Development...and More!</h3>

      <div class="container">
        <label class="title">Introduction</label>
        <p>
          Welcome to the professional web development and coding portfolio of
          Skipper Lizbeth Thurman!
        </p>
      </div>

      <section id="about-me">
        <AboutMe />
      </section>

      <section id="projects">
        <Project />
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Link to={"https://protected-woodland-70982.herokuapp.com/"}>
          <img
            style={{
              borderStyle: "solid",
              borderWidth: "10",
              maxWidth: "200px",
            }}
            src={myhep_screenshot}
            alt="myhep"
          ></img>
        </Link>
        <Link to={"https://protected-woodland-70982.herokuapp.com/"}>
          <p>myhep</p>
        </Link>
        <p>
          An app for physical therapists to assign exercises to their patients
        </p>
        <Link to={"https://lizbeth-thurm.github.io/cinemate/"}>
          <img
            style={{
              borderStyle: "solid",
              borderWidth: "10",
              maxWidth: "200px",
            }}
            src={cinemate_screenshot}
            alt="Cinmate"
          ></img>
        </Link>
        <Link to={"https://lizbeth-thurm.github.io/cinemate/"}>
          <p>Cinemate</p>
        </Link>
        <p>
          An app for searching for movies that are currently playing in
          theaters.
        </p>
        <Link to={"https://knave-bestiary.herokuapp.com/"}>
          <img
            style={{
              borderStyle: "solid",
              borderWidth: "10",
              maxWidth: "200px",
            }}
            src={bestiary_screenshot}
            alt="Knave Bestiary"
          ></img>
        </Link>
        <Link to={"https://knave-bestiary.herokuapp.com/"}>
          <p>Knave Bestiary</p>
        </Link>
        <p>An app for creating and searching for monsters for tabletop RPGs</p>
      </div>
      <section id="contact">
        <Contact />
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <a href="mailto:slthurman01@gmail.com">
          <p>Email</p>
        </a>
        <Link to={"https://www.linkedin.com/in/lizbeth-thurman/"}>
          <p>LinkedIn</p>
        </Link>
        <Link to={"https://github.com/lizbeth-thurm"}>
          <p>GitHub</p>
        </Link>
      </div>
      <section id="resume">
        <Resume />
      </section>
      <a href={thurman_resume}>
        <p>Resume</p>
      </a>
    </div>
  );
};

export default Home;
