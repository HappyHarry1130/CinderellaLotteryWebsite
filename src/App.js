import "./App.css";
import Headerindex from "./components/welcome/header/headerindex";

import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="body">
      {/* <Headerindex /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
