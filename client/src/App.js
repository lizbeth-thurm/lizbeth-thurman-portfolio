import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";

// // new apollo client
// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/lizbeth-thurman-portfolio" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/header" element={<Header />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </Router>
  );
}

export default App;
