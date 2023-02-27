import logo from './logo.svg';
import './App.css';
import Header from './components/molecules/Header';
import "./components/molecules/Header.css";
import About from "./components/molecules/About";

function App() {
  const data ={
    paragraph1 :"Hi, my nama is",
    title1: "Michel Buhendwa.",
    title2:"I build things for the web.",
    paragraph2:"I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement."

  
  }
  return (
    <> 
      <Header />
      {/* <About data={data} /> */}
      </>
   
  );
}

export default App;
