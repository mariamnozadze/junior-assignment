import React from "react";
import { Link } from "react-router-dom";
import "../../assets/index.css";

const ProductFormHeader = () => {
  return (
    <div>
      <div class="header-wrapper">
        <h1 class="title">product Add</h1>
        <div class="buttons">
          <button type="button" class="product-btn" id="save-product-btn">
            Save
          </button>
          <Link to="/junior-assignment">
            <button type="button" class="product-btn" id="cancel-product-btn">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductFormHeader;
