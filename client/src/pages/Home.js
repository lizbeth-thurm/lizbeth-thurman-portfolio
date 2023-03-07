import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import "../PSOne/PSOne.css";

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

<div class="field is-inline">
  <label>With placeholder</label>
  <input type="text" class="input" placeholder="Jill Valentine"></input>
</div>

<button type="button" class="btn">Normal</button>
<button type="button" class="btn primary">Primary</button>
<button type="button" class="btn success">Success</button>
<button type="button" class="btn warning">Warning</button>
<button type="button" class="btn error">Error</button>

      <div class="progress">
  <div class="bar" style={{width : "80%"}}></div>
  <div class="subtitle">This is a progress Bar</div>
</div>
      <Footer />
    </div>
  );
};

export default Home;
