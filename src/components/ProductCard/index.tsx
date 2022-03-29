import React, { useContext } from "react";
import "./ProductCard.scss";

import addToCartIcon from "../../assets/icons/bt_add_to_cart.svg";
import removeToCartIcon from "../../assets/icons/bt_remove_to_cart.svg";
import { IProduct } from "../../interfaces/IProduct";
import { AppContext, AppContextType } from "../../context/AppContext";

const ProductCard = (prod: IProduct) => {
  const { addToCart, removeToCart, state } = useContext(
    AppContext
  ) as AppContextType;

  const handleClickAdd = (p: IProduct) => {
    addToCart(p);
  };

  const handleClickRemove = (p: IProduct) => {
    removeToCart(p);
  };

  /* if (!state.cart.some((p) => p._id === payload._id)) {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  } */

  return (
    <div className="ProductCard">
      <img src={prod.images[0].imageUrl} alt="product" />
      <div className="product-info">
        <div>
          <p>$ {prod.price}</p>
          <p>{prod.title}</p>
        </div>

        <figure>
          {state.cart.some((p) => p._id === prod._id) ? (
            <img
              onClick={() => {
                handleClickRemove(prod);
              }}
              src={removeToCartIcon}
              alt="add-to-cart"
            />
          ) : (
            <img
              onClick={() => {
                handleClickAdd(prod);
              }}
              src={addToCartIcon}
              alt="add-to-cart"
            />
          )}
        </figure>
      </div>
    </div>
  );
};

export { ProductCard };
