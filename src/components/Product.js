import "./Product.css";
import React from "react";
const Product = (props) => {
  const { productData } = props;

  return (
    <>
      <header className="order-header">
        <h1>Teknolojik Yemekler</h1>
      </header>
      <div className="top-section">
        <div className="top-width">
          <div className="img-area">
            <img src={productData.image} alt="pizza" />
          </div>
          <div className="history-section">
            <p>
              AnaSayfa - Seçenekler - <span>Sipariş Oluştur</span>
            </p>
          </div>
          <div>
            <h2>{productData.title}</h2>
          </div>
          <div className="all-info">
            <div className="price-container">
              <p>{productData.price.toFixed(2)}₺</p>
            </div>
            <div className="pizza-summary">
              <p>{productData.rate}</p>
              <p>{productData.comment}</p>
            </div>
          </div>
          <div className="pizza-info">
            <p>{productData.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
