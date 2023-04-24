import logo from './logo.svg';
import './App.css';
import Header from './components/molecules/Header';
import "./components/molecules/Header.css";
import About from "./components/organismes/About";
import Icones from './components/molecules/Home';
import Home from './components/molecules/Home'
import Experiences from './components/organismes/Experiences';
import Work from './components/organismes/Work';
import Contact from './components/organismes/Contact';
import Footer from './components/organismes/Footer';

function App() {
  const data = {
    // paragraph1: "Hi, my nama is",
    // title1: "Michel Buhendwa.",
    // title2: "I build things for the web.",
    // paragraph2: "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement."


  }
  return (
    <>
      <Header />
      <Home />
      <About/>
      <Experiences/>
      <Work/>
      <Contact/>
      <Footer/>
     
    </>

  );
}

export default App;
