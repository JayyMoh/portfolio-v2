import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Navigation from './components/navbar/Navigation';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/skills' element={ <Skills /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
