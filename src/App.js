import AboutMe from "./components/about/AboutMe";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Github from "./components/github/Github";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Github />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
