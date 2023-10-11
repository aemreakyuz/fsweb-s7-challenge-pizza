import { NavLink } from "react-router-dom";
import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <header className="home-header">
      <div className="header-container">
        <h1>Teknolojik Yemekler</h1>
        <div className="text-container">
          <h2>KOD ACIKTIRIR PİZZA DOYURUR</h2>
        </div>
        <NavLink to="./pizza" className="navlink-button">
          ACIKTIM
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
