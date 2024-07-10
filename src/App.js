import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Contact} from "./pages/Contact";
import {NavBar} from "./pages/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/menu" element={<Menu></Menu>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="*" element={<h1> ERROR 404 - PAGE NOT FOUND </h1>} />
        </Routes>
    </Router></div>
  );
}

export default App;
