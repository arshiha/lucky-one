import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart.js";
import Product from "../Product/Product.js";
import "./Shop.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      if (cart.length < 4) {
        const newCart = [...cart, product];
        setCart(newCart);
      } else {
        alert("You cannot select more than four item products");
      }
    } else {
      alert("Already Selected");
    }
  };

  // handle buttons
  const chooseOneForMe = () => {
    if (cart.length === 0) {
      alert("please add items you want to buy");
    } else {
      const newCart = [...cart];
      const randomNewCartLength = Math.floor(Math.random() * newCart.length);
      alert("your Random product is: " + newCart[randomNewCartLength].name);
    }
  };

  const resetAll = () => {
    setCart([]);
  };

  return (
    <div className="shop">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <h4 className="p-5">Selected Items:{cart.length}</h4>
        {cart.map((item) => (
          <Cart key={item.id} cart={item} />
        ))}

        <div className="buttons">
          <button onClick={chooseOneForMe} className="choose-btn">
            Choose one for me
          </button>
          <button onClick={resetAll} className="reset-btn bg-danger mt-3">
            Reset All
          </button>
        </div>
      </div>

    </div>
  );
};

export default Shop;
