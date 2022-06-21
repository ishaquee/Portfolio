import './App.css';
import Home from './section/Home';
import Navbar from './section/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Projects from './section/Projects';
import About from './section/About';
import About1 from './section/About1';
import Contact from './section/Contact';
import React  from 'react';

function App() {
  return (
    <BrowserRouter>
<Navbar/>

    <Routes>
        <Route  path="/"  element={<Home />} />
        <Route  path="/About"  element={<About1 />} />
        <Route  path="/Projects"  element={<Projects />} />
        <Route  path="/resume"  element={<About />} />
        <Route  path="/contact"  element={<Contact />} />
        </Routes>
</BrowserRouter>

  )}

export default App;
