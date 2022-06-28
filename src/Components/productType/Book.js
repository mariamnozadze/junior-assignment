const Book = () => {
  return (
    <div>
      <div className="product_size_box">
        <label for="productWeight" id="productWeight">
          Weight (KG)
        </label>
        <input id="weight" type="text" />
      </div>
      <p className="product_size_desc">please provide weight in Kilograms</p>
    </div>
  );
};

export default Book;
