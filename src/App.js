import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Particles from "react-particles-js";
import Footer from './Components/Footer/Footer';
import About from './Components/AboutMe/About';
import Project from './Components/Project/Project';
function App() {
  return (
    <div>

      <Navigation></Navigation>
      <Header></Header>
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
