import AboutMe from "./components/about/AboutMe";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";
import ExperienceLetters from "./components/experience/ExperienceLetters";
import Footer from "./components/footer/Footer";
import Github from "./components/github/Github";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <ExperienceLetters />
        <Certifications />
        <Github />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
