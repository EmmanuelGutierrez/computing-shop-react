import React, { useContext } from "react";
import { ShoppingCartItem } from "../../components/ShoppingCartItem";
import "./ShoppingCart.scss";

import arrow from "@icons/flechita.svg";
import { AppContext, AppContextType } from "../../context/AppContext";
import { IProduct } from "../../interfaces/IProduct";

interface props {
  activeState: boolean;
}
interface productQ extends IProduct {
  quantity: number;
}

const ShoppingCart = (props: props): JSX.Element => {
  const { state } = useContext(AppContext) as AppContextType;

  let total = 0;
  state.cart.map((item) => {
    const p = item as productQ;
    total += p.price * p.quantity;
  });

  return (
    <aside className={`ShoppingCart ${props.activeState && "active"}`}>
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">Shopping cart</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((p) => (
          <ShoppingCartItem key={`CartItem${p._id}`} {...p} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$ {total}</p>
        </div>
        <button className="primary-button button add-to-cart-button">
          Checkout
        </button>
      </div>
    </aside>
  );
};

export { ShoppingCart };
