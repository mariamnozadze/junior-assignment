const Furniture = () => {
  return (
    <div>
      <div className="product_size_box furniture_dimensions">
        <label for="productHeight" id="productHeight">
          Height (CM)
        </label>
        <input id="height" type="text" />
      </div>
      <div className="product_size_box furniture_dimensions">
        <label for="productWidth" id="productWidth">
          Width (CM)
        </label>
        <input id="width" type="text" />
      </div>
      <div className="product_size_box furniture_dimensions">
        <label for="productLength" id="productLength">
          Length (CM)
        </label>
        <input id="length" type="text" />
      </div>
      <p className="product_size_desc">
        please provide dimensions in HxWxL format
      </p>
    </div>
  );
};

export default Furniture;
