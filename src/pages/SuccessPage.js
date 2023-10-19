import React from "react";
import "./SuccessPage.css";
import "../reset.css";

const SuccessPage = (props) => {
  const { order } = props;

  return (
    <div className="success-container">
      <div className="order-container">
        <h1>Teknolojik Yemekler</h1>
        <hr className="space" />
        <h4>lezzetin yolda</h4>
        <h2>{order ? "SİPARİŞ ALINDI" : "SİPARİŞ BULUNAMADI"}</h2>

        <hr className="separator" />
        <div className="order-summary">
          <h3>{order ? order.title : "Sipariş Bulunamadı"}</h3>
          <div className="space" />
          <div className="order-info">
            <p>
              Boyut: <span>{order ? order.size : "Sipariş Bulunamadı"}</span>
            </p>
            <p>
              Hamur: <span> {order ? order.hamur : "Sipariş Bulunamadı"}</span>
            </p>
            <p className="ek-malzeme">
              Ek Malzemeler:
              <span>
                {order
                  ? order.ekstraMalzemeler.join(", ")
                  : "Sipariş Bulunamadı"}
              </span>
            </p>
          </div>
          <hr className="space" />
          <div className="order-price-container">
            <h3>Sipariş Toplamı</h3>
            <div className="ekmalzemeler-price">
              <h4>Seçimler</h4>
              <h4>{order ? order.ekstraMalzemelerFiyat : "0"}₺ </h4>
            </div>
            <div className="total-price">
              <h4>Toplam</h4>
              <h4>{order ? order.totalPrice : 0}₺</h4>
            </div>
          </div>
        </div>
      </div>
      <hr className="double-space" />
    </div>
  );
};

export default SuccessPage;
