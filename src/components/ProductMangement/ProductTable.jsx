import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div>
      <div>
        <h2>Product Table</h2>
        <div>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead></thead>
            <tr>
              <td>No</td>
              <td>Name</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Actions</td>
            </tr>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <tr>
                      <td>
                        <button>view</button>
                      </td>
                      <td>
                        <button>delete</button>
                      </td>
                    </tr>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
