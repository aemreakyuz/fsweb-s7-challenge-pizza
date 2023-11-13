import React from "react";

import ramen from "../assets/adv-aseets/icons/1.svg";
import pizza from "../assets/adv-aseets/icons/2.svg";
import burger from "../assets/adv-aseets/icons/3.svg";
import fries from "../assets/adv-aseets/icons/4.svg";
import fastfood from "../assets/adv-aseets/icons/5.svg";
import drinks from "../assets/adv-aseets/icons/6.svg";

import ProductCard from "../components/ProductCard.js";

import "./Main.css";

export default function Main(props) {
  const { productData, selectedProduct } = props;
  console.log("Main", productData);
  return (
    <div className="margin-0-auto flex column justify-content-center align-items-center gap-5 bg-color-beige main-content">
      <div className=" flex gap-2 font-Quattrocento headline overflow-hidden">
        <div className="flex column gap-2 flex-grow-1">
          <div className="flex column gap-1 flex-grow-1 color-white align-items-flex-start justify-content-flex-start popular-product">
            <h2>
              Özel <br />
              Lezzetus
            </h2>
            <h3>Position:Absolute Acı Burger</h3>
            <button
              data-cy="goToOrderForm"
              className="color-red bg-color-white font-Barlow order-button"
              onClick={() => selectedProduct(productData[1])}
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
        <div className="flex column gap-2 flex-grow-1 flex-wrap">
          <div className="flex column gap-1 justify-content-center flex-grow-1 align-items-flex-start popular-menu">
            <h3>
              Hackathlon
              <br />
              Burger Menu
            </h3>
            <button className="color-red bg-color-white font-Barlow order-button">
              SİPARİŞ VER
            </button>
          </div>
          <div className="flex column gap-1 justify-content-center flex-grow-1 align-items-flex-start carrier-commercial">
            <h3>
              <span className="color-red">Çoooook</span> hızlı
              <br />
              npm gibi kurye
            </h3>
            <button className="color-red bg-color-white font-Barlow order-button">
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </div>
      <div className="flex column justify-center items-center gap-2 ">
        <div className="mid-headers">
          <h3 id="menu" className="text-align-center font-Satisfy color-red">
            <span>en çok paketlenen menüler</span>
          </h3>
          <h3 className="text-align-center font-Barlow">
            Acıktıran Kodlara Doyuran Lezzetler
          </h3>
        </div>
        <div className="flex flex-wrap  justify-content-space-e gap-1">
          <button className="flex justify-content-center align-items-center gap-1 bg-color-white font-Barlow color-dark-gray nav-button-container">
            <img src={ramen} alt="Ramen" /> Ramen
          </button>
          <button className="flex justify-content-center align-items-center gap-1 bg-color-white font-Barlow color-dark-gray nav-button-container hover:bg-black">
            <img src={pizza} alt="Pizza" /> Pizza
          </button>
          <button className="flex justify-content-center align-items-center gap-1 bg-color-white font-Barlow color-dark-gray nav-button-container">
            <img src={burger} alt="Burger" /> Burger
          </button>
          <button className="flex justify-content-center align-items-center gap-1 bg-color-white font-Barlow color-dark-gray nav-button-container">
            <img src={fries} alt="French fries" /> French fries
          </button>
          <button className="flex justify-content-center align-items-center gap-1 bg-color-white font-Barlow color-dark-gray nav-button-container">
            <img src={fastfood} alt="Fast food" /> Fast food
          </button>
          <button className="flex justify-content-center align-items-center gap-1 bg-color-white font-Barlow color-dark-gray nav-button-container">
            <img src={drinks} alt="Soft drinks" /> Soft drinks
          </button>
        </div>
        <div className="flex flex-wrap w-[100%] gap-5 justify-center ">
          {productData.map((item, index) => {
            return (
              <ProductCard
                item={item}
                key={index}
                selectedProduct={selectedProduct}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
