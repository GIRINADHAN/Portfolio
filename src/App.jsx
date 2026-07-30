import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Project />
        <Skills />
        <Contact />
      </main>
      <FloatingButtons />
    </div>
  );
}
