import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Company from "./pages/Company";
import AboutDetail from "./pages/AboutDetail";

function App() {
  return (
    <div>
      <h1>라우터 실습</h1>
      <nav>
        <Link to="/">Home</Link> || 
        <Link to="/about"> About</Link> || 
        <Link to="/company"> Company</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about/:id" element={<AboutDetail/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  );
}

export default App;
