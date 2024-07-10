import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Contact} from "./pages/Contact";
import {NavBar} from "./pages/NavBar";
import {useState, createContext} from "react";

export const AppContext = createContext(undefined);

function App() {
  const [username, setUsername] = useState("Alessandro");

  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/profile" element={<Profile></Profile>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="*" element={<h1> ERROR 404 - PAGE NOT FOUND </h1>} />
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
