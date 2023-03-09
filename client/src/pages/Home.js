import React from "react";
import { HashLink } from "react-router-hash-link";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Resume from "../components/Resume";
import "../PSOne/PSone.css";
import profile_pic from "../media/profile_pic.jpg";

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
      <section id="contact">
        <Contact />
      </section>
      <section id="resume">
        <Resume />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
