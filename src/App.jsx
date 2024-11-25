import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footor from "./components/Footor.js";
import About from "./pages/About.jsx";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Contacts from "./pages/Contacts.jsx";
import Projects from "./pages/Projects.jsx";

const App = () => {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/contact" element={<Contacts />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/about" element={<About />}/>
    </Routes> 
    <Footor />
   </>
  );
};

export default App;
