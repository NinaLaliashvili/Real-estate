import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import one from "../../Images/2.avif";
import "./Home.css";
import Search from "../Search/Search";

const Home = () => {
  return (
    <>
      <div className="header" style={{ backgroundImage: `url(${one})` }}>
        <div className="header-text">🏡 Welcome to Prestige Properties!</div>
        <div className="header-text1">
          Find your dream space with ease and confidence. Your property journey
          starts here.
        </div>

        <Link
          to="search"
          smooth={true}
          offset={-70}
          duration={500}
          className="arrow-link"
        >
          <FaChevronDown className="down-arrow" />
        </Link>
      </div>
      <div id="search">
        <Search />
      </div>
    </>
  );
};

export default Home;
