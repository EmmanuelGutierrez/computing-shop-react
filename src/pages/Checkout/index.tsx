import React from "react";
import { OrderItem } from "../../components/OrderItem";
import "./Checkout.scss";

const Checkout = (): JSX.Element => {
  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My order</h1>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <span>19/02/22</span>
              <span>6 articles</span>
            </p>
            <p>$37000,00</p>
          </div>
          <OrderItem />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
