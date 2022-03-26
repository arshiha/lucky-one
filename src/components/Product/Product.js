import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";

const Product = (props) => {
  const { product, handleAddToCart } = props;
  const { name, img, price } = product;

  return (
    <div className="col-md-4 product">
      <div className="card">
        <img src={img} className="card-img-top product-img" alt="product__img" />
        <div className="card-body product-info">
          <h5 className="product-name text-white">Name: {name}</h5>
          <h6 className="card-title text-white">Price: ${price}</h6>
          <button
            onClick={() => handleAddToCart(props.product)}
            className="add-to-cart-btn"
          >
            <p>
              Add to Cart{" "}
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>{" "}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
