import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import "../PSOne/PSone.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h2>Skipper Lizbeth Thurman</h2>
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
