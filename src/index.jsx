import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { backgroundTexture } from "./assets/assets";

document.documentElement.style.setProperty("--background-texture", `url("${backgroundTexture}")`);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
