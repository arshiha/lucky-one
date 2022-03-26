import React, { useEffect, useState } from "react";
import Product from "../Product/Product.js";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleClick = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={handleClick}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h2>Selected Bags</h2>
        <p className="color-style">CHOOSE 1 FOR ME: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
