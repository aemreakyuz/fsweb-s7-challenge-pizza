import React from "react";
import "./OrderPage.css";
import Forms from "../components/Forms";
import banner from "../assets/adv-aseets/adv-form-banner.png";
import Footer from "../layout/Footer";

export default function OrderPage(props) {
  const { productData, handleOrder } = props;

  return (
    <>
      <header className="order-header">
        <h1>Teknolojik Yemekler</h1>
      </header>
      <div className="top-section">
        <div className="top-width">
          <img src={banner} alt="pizza" />
          <div className="history-section">
            AnaSayfa - Seçenekler - <span>Sipariş Oluştur</span>
          </div>
          <h2>Position Absolute Acı Pizza</h2>
          <div className="all-info">
            <div className="price-container">
              <p>85.50₺</p>
            </div>
            <div className="pizza-summary">
              <p>4.9</p>
              <p>(200)</p>
            </div>
          </div>
          <div className="pizza-info">
            <p>
              Frontend Dev olarak hala position:absolute kullanıyorsan bu çok
              acı tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
              diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
              ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </div>
        </div>
      </div>
      <Forms productData={productData} handleOrder={handleOrder} />
      <Footer />
    </>
  );
}
