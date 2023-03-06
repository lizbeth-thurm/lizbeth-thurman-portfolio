import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import "../PSOne/PSOne.css";

const Home = () => {
  return (
    <div>
      <h2>Skipper Lizbeth Thurman</h2>
      <h3>Full-Stack Web Development...and More!</h3>
      <div class="container">
        <label class="title">Introduction</label>
        <p>
          Welcome to the professional web development and coding portfolio of
          Skipper Lizbeth Thurman!
        </p>
      </div>

      <label>
  <input type="radio" name="test" value="small" checked>
  <span class="option">Yes
    <span class="click"></span>
  </span>
  </input>
</label>
      
    </div>
  );
};

export default Home;
