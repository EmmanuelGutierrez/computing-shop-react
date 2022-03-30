import React, { useContext, useState } from "react";
import "./Header.scss";

import menu from "../../assets/icons/icon_menu.svg";
import shoppingCart from "../../assets/icons/icon_shopping_cart.svg";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { AppContext, AppContextType } from "../../context/AppContext";
import { ShoppingCart } from "../../containers/ShoppingCart";
import MobileMenu from "../MobileMenu";

const Header = (): JSX.Element => {
  const { state } = useContext(AppContext) as AppContextType;
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <nav className="header">
      <MobileMenu
        menuToggle={toggleMobileMenu}
        setMenuToggle={setToggleMobileMenu}
      />
      <img
        className="menu cursor-pointer"
        src={menu}
        alt="icon-menu"
        onClick={() => {
          setToggleMobileMenu(!toggleMobileMenu);
        }}
      />
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
          <li
            className="navbar-email"
            onMouseEnter={handleToggle}
            onMouseLeave={handleToggle}
          >
            <div className="navbar-email-text">
              <p> example@example.com</p>
            </div>
            <Menu activeState={toggle} />
          </li>
          <li
            className="navbar-shopping-cart cursor-pointer"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={shoppingCart} alt="shopping-cart" />
            {state.cart.length ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>

      <ShoppingCart activeState={toggleOrders} />
    </nav>
  );
};

export default Header;
