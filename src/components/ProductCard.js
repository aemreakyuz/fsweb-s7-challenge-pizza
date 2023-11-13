import React from "react";

function ProductCard(props) {
  const { productData, product: item } = props;

  const handleTitleClick = () => {
    if (productData && typeof productData === "function") {
      productData(item);
    }
  };

  return (
    <div className="flex column gap-1 cursor-pointer font-Barlow bg-color-white rounded-2xl w-16 ">
      <img src={item.image} alt={item.title} />
      <h4 onClick={handleTitleClick} className="cursor-pointer">
        {item.title}
      </h4>
      <div className="flex items-center ">
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
