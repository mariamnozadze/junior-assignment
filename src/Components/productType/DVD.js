const DVD = () => {
  return (
    <div>
      <div className="product_size_box">
        <label for="productSize" id="productSize">
          Size (MB)
        </label>
        <input id="size" type="text" />
      </div>
      <p className="product_size_desc">please provide size in Megabytes</p>
    </div>
  );
};

export default DVD;
