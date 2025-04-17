import React from "react";

const ProductForm = ({ handleAddProduct }) => {
  const productHandler = (event) => {
    event.preventDefault();
    //   console.log(event.target.name);
    const name = event.target.name.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const newProduct = {
      name,
      price,
      quantity,
    };
    // console.log(newProduct);
    handleAddProduct(newProduct);
  };
  return (
    <div>
      <h2>Product Management page</h2>
      <form onSubmit={productHandler}>
        <input type="text" name="name" placeholder="Enter product name" />
        <br />
        <br />
        <input type="number" name="price" placeholder="Enter product price" />
        <br />
        <br />
        <input
          type="text"
          name="quantity"
          placeholder="Enter product quantity"
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProductForm;
