import './App.css';
import Home from './section/Home';
import Navbar from './section/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './section/About';
import About1 from './section/About1';
import Contact from './section/Contact';
import React  from 'react';
import Projectcrono from './section/Projectcrono';
import Projects1 from './section/Projects1';

function App() {
  return (
    <BrowserRouter>
<Navbar/>

    <Routes>
        <Route  path="/"  element={<Home />} />
        <Route  path="/About"  element={<About1 />} />
        <Route  path="/Projects"  element={<Projects1 />} />
        <Route  path="/resume"  element={<About />} />
        <Route  path="/contact"  element={<Contact />} />
        <Route  path="*"  element={<Projectcrono />} />
        </Routes>
</BrowserRouter>

  )}

export default App;
