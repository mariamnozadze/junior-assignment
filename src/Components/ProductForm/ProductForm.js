import React from "react";
import "../../assets/index.css";
import ProductType from "../productType/ProductType";
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
        <ProductType />
      </form>
    </div>
  );
};

export default ProductForm;
