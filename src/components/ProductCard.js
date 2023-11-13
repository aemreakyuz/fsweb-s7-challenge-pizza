import React from "react";
import "./ProductCard.css";

function ProductCard(props) {
  const { item, selectedProduct } = props;
  return (
    <div
      className="flex column gap-1 cursor-pointer font-Barlow bg-color-white food mt-4"
      onClick={() => selectedProduct(item)}
    >
      <img src={item.image} alt={item.title} />
      <h4>{item.title}</h4>
      <div className="flex justify-content-space-b aling-items-center food-footer">
        <p className="color-light-gray">{item.rate}</p>
        <p className="color-light-gray">({item.comment})</p>
        <p>
          <span className="color-dark-gray">{item.price.toFixed(2)}₺</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
