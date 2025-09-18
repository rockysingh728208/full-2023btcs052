import React from "react";
import Header from "../components/Header"; // 👈 path check karna (components ke andar hai)

const Product = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6">Products Page</h1>
      <Header />
    </div>
  );
};

export default Product;
