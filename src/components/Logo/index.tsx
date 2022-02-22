import React from "react";
import "./Logo.scss";

import logo from "@logos/logo.gif";
const Logo = () => {
  return (
    <figure className="logo-container">
      <img src={logo} alt="logo" />
      <figcaption>GAMESTORE</figcaption>
    </figure>
  );
};

export { Logo };
