import React, { useEffect, useState } from "react";
import DVD from "./DVD";
import Furniture from "./Furniture";
import Book from "./Book";

const ProductType = () => {
  const [types, setTypes] = useState("");

  const [dvdContent, setDvdContent] = useState(false);
  const [furnitureContent, setFurnitureContent] = useState(false);
  const [bookContent, setBookContent] = useState(false);

  /* whenever type changes this funtion displays content */
  useEffect(() => {
    types === "DVD" ? setDvdContent(true) : setDvdContent(false);
    types === "Furniture"
      ? setFurnitureContent(true)
      : setFurnitureContent(false);
    types === "Book" ? setBookContent(true) : setBookContent(false);
  }, [types]);

  const handleChange = (e) => {
    setTypes(e.target.value);
  };

  return (
    <div className="product_type_switcher">
      <label for="typeSwitcher" id="typeSwitcher">
        Type Switcher:
      </label>
      <select
        id="productType"
        name="productType"
        value={types}
        onChange={handleChange}
      >
        <option value="-" id="-" disabled>
          -
        </option>
        <option value="DVD" id="DVD">
          DVD
        </option>
        <option value="Furniture" id="Furniture">
          Furniture
        </option>
        <option value="Book" id="Book">
          Book
        </option>
      </select>
      {dvdContent && <DVD />}
      {furnitureContent && <Furniture />}
      {bookContent && <Book />}
    </div>
  );
};

export default ProductType;
