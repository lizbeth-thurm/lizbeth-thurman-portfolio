import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";
import "../PSOne/PSone.css";
import profile_pic from "../../public/profile_pic.jpg";

const Home = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <Header />
      <h2>Skipper Lizbeth Thurman</h2>
      <img style={{borderStyle: "solid", borderWidth: "10"}} src={profile_pic} alt="Skipper Lizbeth Thurman" />
      <h3>Full-Stack Web Development...and More!</h3>
      <div class="container">
        <label class="title">Introduction</label>
        <p>
          Welcome to the professional web development and coding portfolio of
          Skipper Lizbeth Thurman!
        </p>
      </div>
      <Project />
      <Footer />
    </div>
  );
};

export default Home;
