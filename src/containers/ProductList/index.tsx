import React from "react";
import { ProductCard } from "../../components/ProductCard";
import { useGetProducts } from "../../hooks/useGetProducts";
import { IProduct } from "../../interfaces/IProduct";
import "./ProductList.scss";

const API = "http://localhost:4001/products/";

const ProductList = (): JSX.Element => {
  const products = useGetProducts(API);
  return (
    <main className="ProductList">
      <div className="cards-container">
        {products.map((prod) => (
          <ProductCard key={prod._id} {...prod} />
        ))}
      </div>
    </main>
  );
};

export { ProductList };
