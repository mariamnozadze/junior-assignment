import React from "react";
import "../../assets/index.css";
import { Link } from "react-router-dom";

const homeHeader = () => {
  return (
    <header>
      <div class="header-wrapper">
        <h1 class="title">product list</h1>
        <div class="buttons">
          <Link to="/ProductForm">
            <button type="button" class="product-btn" id="add-product-btn">
              add
            </button>
          </Link>
          <button type="button" class="product-btn" id="delete-product-btn">
            mass delete
          </button>
        </div>
      </div>
    </header>
  );
};

export default homeHeader;
