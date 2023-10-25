import Header from "../layout/Header";
import "../layout/Header.css";
import React from "react";
import Footer from "../layout/Footer.js";
import ProductCard from "../components/ProductCard";

const Home = (props) => {
  const { selectedProduct, productData } = props;

  return (
    <div className="flex justify-content-space-around align-items-center ">
      <Header />
      <div className="flex gap-5 p-4">
        {productData.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              selectedProduct={selectedProduct}
            ></ProductCard>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
