import Header from "../layout/Header";
import "../layout/Header.css";
import React from "react";
import Footer from "../layout/Footer.js";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import Main from "../layout/Main";
import "./Home.css";

import ramen from "../assets/adv-aseets/icons/1.svg";
import pizza from "../assets/adv-aseets/icons/2.svg";
import burger from "../assets/adv-aseets/icons/3.svg";
import fries from "../assets/adv-aseets/icons/4.svg";
import fastfood from "../assets/adv-aseets/icons/5.svg";
import drinks from "../assets/adv-aseets/icons/6.svg";

const Home = (props) => {
  const { selectedProduct, productData } = props;
  const goToFoodArea = () => {
    const goToFoodNav = document.getElementById("menu");
    goToFoodNav.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-w-screen">
      <div className="text-align-center bg-color-red color-white home">
        <header>
          <h1 className="font-Londrina" data-cy="h1">
            Teknolojik Yemekler
          </h1>
          <h3 className="font-Satisfy color-yellow">fırsatı kaçırma</h3>
          <h2 className="font-Barlow">
            KOD ACIKTIRIR
            <br />
            PIZZA, DOYURUR
          </h2>
          <button
            className="font-Barlow bg-color-yellow orderPage-button"
            onClick={goToFoodArea}
          >
            ACIKTIM
          </button>
        </header>
      </div>
      <nav
        id="foodNav"
        className="flex flex-wrap justify-between gap-5 nav-container"
      >
        <Link className="flex justify-center align-items-center mt-[16rem] gap-1 ">
          <img src={ramen} alt="Kore Yemeği" /> YENİ! Kore
        </Link>
        <Link className="flex justify-center align-items-center gap-1">
          <img src={pizza} alt="Pizza" /> Pizza
        </Link>
        <Link className="flex justify-center align-items-center gap-1">
          <img src={burger} alt="Burger" /> Burger
        </Link>
        <Link className="flex justify-center align-items-center gap-1">
          <img src={fries} alt="Kızartmalar" /> Kızartmalar
        </Link>
        <Link className="flex justify-center align-items-center gap-1">
          <img src={fastfood} alt="Fast food" /> Fast food
        </Link>
        <Link className="flex justify-center align-items-center gap-1">
          <img src={drinks} alt="Gazlı İçeçekler" />
          Gazlı İçecek
        </Link>
      </nav>
      <Main productData={productData} selectedProduct={selectedProduct} />
      <Footer />
    </div>
  );
};

export default Home;
