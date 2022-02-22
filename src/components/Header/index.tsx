import React, { useState } from "react";
import "./Header.scss";

import menu from "../../assets/icons/icon_menu.svg";
import shoppingCart from "../../assets/icons/icon_shopping_cart.svg";
import { Logo } from "../Logo";
import { Menu } from "../Menu";

const Header = (): JSX.Element => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <nav>
      <img className="menu" src={menu} alt="icon-menu" />
      <div className="navbar-left">
        <Logo />
        <ul>
          <li>
            <a href="./">CATEGORIES</a>
          </li>
          <li>
            <a href="./">Componentes</a>
          </li>
          <li>
            <a href="./">Peripherals</a>
          </li>
          <li>
            <a href="./">Notebooks</a>
          </li>
          <li>
            <a href="./">Tablets</a>
          </li>
          <li>
            <a href="./">Softwares</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            example@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={shoppingCart} alt="shopping-cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
    </nav>
  );
};

export default Header;
