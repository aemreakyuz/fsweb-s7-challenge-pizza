import { NavLink } from "react-router-dom";
import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="home-container">
      <header className="header-container">
        <h1>Teknolojik Yemekler</h1>
        <h4>fırsatı kaçırma</h4>
        <h2>KOD ACIKTIRIR PİZZA DOYURUR</h2>
        <button
          id="order-pizza"
          className="navlink-button"
          data-cy="order-pizza"
        >
          ACIKTIM
        </button>
      </header>
    </div>
  );
};

export default Header;
