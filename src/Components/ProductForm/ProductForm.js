import React from "react";
import "../../assets/index.css";
import ProductFormHeader from "./ProductFormHeader";
// import Footer from "../Footer/Footer"

const ProductForm = () => {
  return (
    <div>
      <ProductFormHeader />
      <form id="product_form" className="product_form">
        <label for="productSku" id="ProductSku">
          SKU
        </label>
        <input id="sku" type="text" />

        <label for="productName" id="ProductName">
          Name
        </label>
        <input id="name" type="text" />

        <label for="productPrice" id="ProductPrice">
          Price
        </label>
        <input id="price" type="text" />

        <label for="typeSwitcher" id="typeSwitcher">Type Switcher:</label>
        <select id="productType" name="productType">
        <option value="-" id="-" disabled>
            -
          </option>
          <option value="DVD" id="DVD">
            DVD
          </option>
          <option value="Furniture" id="Furniture">
            Furniture
          </option>
          <option value="book" id="Book">
            Book
          </option>
        </select>
      </form>
      
    </div>
  );
};

export default ProductForm;
