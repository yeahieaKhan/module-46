import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductMangement = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    console.log(products);
  };

  return (
    <div>
      <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductMangement;
