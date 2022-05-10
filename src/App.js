
import Home from './Components/Home/Home';
import About from './Components/AboutMe/About';
import Contact from './Components/ContactMe/Contact';
import Skills from './Components/Skills/Skills';
import Project from './Components/Projects/Project';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/> 
    </div>
  );
}

export default App;
