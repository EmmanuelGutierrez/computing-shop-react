import React from "react";
import { ProductCard } from "../../components/ProductCard";
import "./ProductList.scss";

const ProductList = (): JSX.Element => {
  return (
    <main className="ProductList">
      <div className="cards-container">
        <ProductCard />
      </div>
    </main>
  );
};

export { ProductList };
