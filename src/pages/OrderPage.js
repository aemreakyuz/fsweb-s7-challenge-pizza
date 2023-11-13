import React, { useEffect } from "react";
import "./OrderPage.css";
import Forms from "../components/Forms";
import Footer from "../layout/Footer";
import Product from "../components/Product";
import { useParams } from "react-router-dom";
import { menuData } from "../utils/menuData";

export default function OrderPage(props) {
  const { productData, setProduct, handleOrder } = props;
  console.log(productData);
  const { id } = useParams();

  const foundProduct = menuData.find((p) => p.id === Number(id));
  setProduct(foundProduct);

  return (
    <>
      <Product productData={foundProduct}></Product>
      <Forms productData={foundProduct} handleOrder={handleOrder} />
      <Footer />
    </>
  );
}
