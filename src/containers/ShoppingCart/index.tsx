import React from "react";
import { ShoppingCartItem } from "../../components/ShoppingCartItem";
import "../styles/ShoppingCart.scss";

import arrow from "@icons/flechita.svg";

const ShoppingCart = (): JSX.Element => {
  return (
    <aside className="ShoppingCart">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">Shopping cart</p>
      </div>
      <div className="my-order-content">
        <ShoppingCartItem />

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$37000,00</p>
        </div>
        <button className="primary-button button add-to-cart-button">
          Checkout
        </button>
      </div>
    </aside>
  );
};

export { ShoppingCart };
