import React from "react";
import "../styles/ProductCard.scss";

import addToCart from "../../assets/icons/bt_add_to_cart.svg";

const ProductCard = () => {
  return (
    <div className="ProductCard">
      <img
        src="https://images-ext-1.discordapp.net/external/EEifZyGqmx1LzAQP7qfOUkLC554tu1Y8FDUIBS7yPbU/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940/https/images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg?width=1135&height=702"
        alt="product"
      />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Teclado</p>
        </div>
        <figure>
          <img src={addToCart} alt="add-to-cart" />
        </figure>
      </div>
    </div>
  );
};

export { ProductCard };
