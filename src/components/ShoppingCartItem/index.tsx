import React, { useContext } from "react";
import "./ShoppingCartItem.scss";
import addToCartIcon from "../../assets/icons/bt_add_to_cart.svg";
import removeToCartIcon from "../../assets/icons/bt_remove_to_cart.svg";

import iconClose from "@icons/icon_close.png";
import { IProduct } from "../../interfaces/IProduct";
import { AppContext, AppContextType } from "../../context/AppContext";

const ShoppingCartItem = (props: IProduct) => {
  const { images, title, price, quantity } = props;
  const { removeToCart, addToCart, decrementToCart } = useContext(
    AppContext
  ) as AppContextType;

  const handleIncrementClick = () => {
    addToCart(props);
  };
  const handleDecrementClick = () => {
    decrementToCart(props);
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
            onClick={handleDecrementClick}
          >
            x
          </button>
        ) : (
          <button
            className="button primary-button "
            onClick={handleDecrementClick}
          >
            -
          </button>
        )}
        <input type="number" value={quantity} />

        <button
          className="button primary-button"
          onClick={handleIncrementClick}
        >
          +
        </button>
      </div>
    </div>
  );
};

export { ShoppingCartItem };
