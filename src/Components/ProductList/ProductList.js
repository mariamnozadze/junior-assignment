import React from "react";
import "../../assets/index.css";
import Footer from "../Footer/Footer";
import Header from "../Header/homeHeader";
import productData from "./data";

const ProductList = () => {

  return (
    <div className="app">
      <Header />
      <div class="product-list">
        {productData.map((dataItem) => {
          const { sku, name, price, size } = dataItem;
          return (
            <div class="product-card">
              <input
                type="checkbox"
                id="product-11"
                name="product-11"
                value=""
              />
              <div class="product-attributes">
                <div class="product-sku">{sku}</div>
                <div class="product-name">{name}</div>
                <div class="product-price">{price}</div>
                <div class="product-size">{size}</div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
