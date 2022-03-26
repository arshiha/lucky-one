import React from "react";
import "./Cart.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = (props) => {
//   const { name, image } = props.cart;
    console.log(props);
  return (
    <div id="cart" className="cart">
      {/* <div className="cart-box">
        <img className="cart-img" src={image} alt="cart__img" />
        <h5 className="cart-name">{name}</h5>
      </div> */}
    </div>
  );
};

export default Cart;
