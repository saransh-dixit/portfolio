import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Work from "./components/works/work";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
