import './App.css';
import Home from "./screen/home";
import About from "./screen/about";
import RestTest from "./screen/restTest"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/restTets">RestTest</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/restTets" element={<RestTest />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;