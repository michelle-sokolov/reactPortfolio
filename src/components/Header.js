import React from "react";
import "../styles/Header.css";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 style={{ backgroundColor: "#b71775" }}>🔹Michelle Sokolov 🔹</h1>
      <h2 style={{ backgroundColor: "#b71775" }}>👩🏻‍💻Full Stack Developer 👩🏻‍💻</h2>
      <h3 style={{ backgroundColor: "#b71775" }}>📍Los Angeles, CA 📍</h3>
      <span>
        <h6>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/portfolio">Portfolio </Link>
        </h6>
      </span>
    </header>
  );
}

export default Header;
