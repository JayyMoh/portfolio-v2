import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
