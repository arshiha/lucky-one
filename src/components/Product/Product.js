import React from "react";

const Product = (props) => {
  const { name, img, price } = props.product;
  return (
    <div>
      <img src={img} alt=""></img>
    </div>
  );
};

export default Product;
