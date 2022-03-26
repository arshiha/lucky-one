import React from "react";
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mx-auto text-center">
              The Bag Bazaar
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
