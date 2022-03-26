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

  const handleClick = (product) => {
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
        <h4 className="p-5">Selected Items:{cart.length}</h4>
        {cart.map((item) => (
          <Cart key={item.id} cart={item} />
        ))}

        <div className="buttons text-center">
          <Button className="w-75 my-3">Choose one for me</Button>
          <Button className="w-75 bg-danger mb-5">Reset All</Button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
