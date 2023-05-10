import "./App.css";
import AllRoutes from "./Pages/AllRoutes";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <Home />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
