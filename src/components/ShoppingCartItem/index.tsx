import React from "react";
import "./ShoppingCartItem.scss";

import iconClose from "@icons/icon_close.png";
const ShoppingCartItem = () => {
  return (
    <div className="ShoppingCartItem">
      <figure>
        <img
          src="https://images-ext-1.discordapp.net/external/EEifZyGqmx1LzAQP7qfOUkLC554tu1Y8FDUIBS7yPbU/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940/https/images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg?width=1135&height=702"
          alt="keyboard"
        />
      </figure>
      <p>keyboard</p>
      <p>$8000,00</p>
      <img src={iconClose} alt="close" />
    </div>
  );
};

export { ShoppingCartItem };
