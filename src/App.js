import "./App.css";
import AllRoutes from "./Pages/AllRoutes";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
