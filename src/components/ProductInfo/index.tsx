import React from "react";
import addToCart from "@icons/bt_add_to_cart.svg";
const ProductInfo = () => {
  return (
    <>
      <img
        src="https://images-ext-1.discordapp.net/external/EEifZyGqmx1LzAQP7qfOUkLC554tu1Y8FDUIBS7yPbU/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940/https/images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg?width=1135&height=702"
        alt="keyboard"
      />
      <div className="ProductInfo">
        <p>$8000,00</p>
        <p>Keyboard</p>
        <h3>Description</h3>
        <p>
          Redragon K530 Draconic 60% Compact RGB Wireless Mechanical Keyboard,
          61 Keys Tenkeyless Designed 5.0 Bluetooth Gaming Keyboard with Tactile
          Brown Switches and 16.8 Million RGB Lighting for PC, Tablet, Cell
          Phone
        </p>
        <button className="primary-button button add-to-cart-button">
          <img src={addToCart} alt="add-to-cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
