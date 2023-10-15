import "./App.css";
import Login from "./Components/Log In/Login";
import Rules from "./Components/Rules/Rules";
import Contact from "./Components/Contact/Contact";
import Register from "./Components/Sign Up/Register";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

import { Route, Routes, NavLink } from "react-router-dom";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div>
      <Navbar />
      <NavLink to="/"></NavLink>
      <NavLink to="register"></NavLink>
      <NavLink to="login"></NavLink>
      <NavLink to="about"></NavLink>
      <NavLink to="contact"></NavLink>
      <NavLink to="rules"></NavLink>
      <NavLink to="search"></NavLink>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="rules" element={<Rules />}></Route>
          <Route path="search" element={<Search />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
