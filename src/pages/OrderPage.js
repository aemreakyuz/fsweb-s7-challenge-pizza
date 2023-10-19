import React from "react";
import "./OrderPage.css";
import Forms from "../components/Forms";
import banner from "../assets/adv-aseets/adv-form-banner.png";
import Footer from "../layout/Footer";
import Product from "../components/Product";

export default function OrderPage(props) {
  const { productData, handleOrder } = props;

  return (
    <>
      <Product productData={productData}></Product>
      <Forms productData={productData} handleOrder={handleOrder} />
      <Footer />
    </>
  );
}
