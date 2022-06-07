import React from "react";
import "../../assets/index.css";

const Header = () => {

  return (
    <header>
      <div class="header-wrapper">
        <h1 class="title">product list</h1>
        <div class="buttons">
          <button type="button" class="product-btn" id="add-product-button">
            add
          </button>
          <button type="button" class="product-btn" id="delete-product-btn" >
            mass delete
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
