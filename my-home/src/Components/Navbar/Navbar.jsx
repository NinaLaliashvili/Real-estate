import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import home from "../../Images/home.png";

const Navbar = () => {
  return (
    <div className="navbarbox">
      <Link to={"/"}>
        <img src={home} alt="Logo" className="navbar-logo" />
      </Link>

      <div className="nav-links">
        <Link to={"/login"}>Log In</Link>
        <div className="dropdown">
          <Link to={"/for-rent"} className="dropbtn">
            For Rent
          </Link>
          <div className="dropdown-content">
            <Link to={"/city1"}>City 1</Link>
            <Link to={"/city2"}>City 2</Link>
            <Link to={"/city3"}>City 3</Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to={"/for-sale"} className="dropbtn">
            For Sale
          </Link>
          <div className="dropdown-content">
            <Link to={"/city1"}>City 1</Link>
            <Link to={"/city2"}>City 2</Link>
            <Link to={"/city3"}>City 3</Link>
          </div>
        </div>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/rules"}>Rules</Link>
      </div>
    </div>
  );
};

export default Navbar;
