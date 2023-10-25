import React from "react";

function ProductCard(props) {
  const { selectedProduct, product: item } = props;
  return (
    <div className="flex column gap-1 cursor-pointer font-Barlow bg-color-white rounded-2xl w-16 ">
      <img src={item.image} alt={item.title} />
      <h4 onClick={() => selectedProduct(item)} className="cursor-pointer">
        {item.title}
      </h4>
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
