import React, { ChangeEvent, ChangeEventHandler, useContext } from "react";
import "./ShoppingCartItem.scss";

import iconClose from "@icons/icon_close.png";
import { IProduct } from "../../interfaces/IProduct";
import { AppContext, AppContextType } from "../../context/AppContext";

const ShoppingCartItem = (props: IProduct) => {
  const { images, title, price, quantity } = props;
  const { addToCart, decrementCart } = useContext(AppContext) as AppContextType;

  const handleIncrementClick = (prod: IProduct) => {
    addToCart(prod);
  };
  const handleDecrementClick = (prod: IProduct) => {
    decrementCart(prod);
  };

  return (
    <div className="ShoppingCartItemContainer">
      <div className="ShoppingCartItem">
        <figure>
          <img src={images[0].imageUrl} alt={title} />
        </figure>
        <p>{title}</p>
        <p>$ {quantity && price * quantity}</p>

        {/* <img
          src={iconClose}
          alt="close"
          onClick={() => {
            removeToCart(props);
          }}
        /> */}
      </div>
      <div className="inputNumber">
        {props.quantity === 1 ? (
          <button
            className="button primary-button tertiary-button"
            onClick={() => {
              handleDecrementClick(props);
            }}
          >
            x
          </button>
        ) : (
          <button
            className="button primary-button "
            onClick={() => {
              handleDecrementClick(props);
            }}
          >
            -
          </button>
        )}
        <input type="number" disabled value={quantity} />

        <button
          className="button primary-button"
          onClick={() => {
            handleIncrementClick(props);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export { ShoppingCartItem };
