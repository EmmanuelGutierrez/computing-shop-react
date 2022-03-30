import React from "react";
import "./MobileMenu.scss";
import iconClose from "../../assets/icons/icon_close.png";

interface props {
  menuToggle: boolean;
  setMenuToggle: Function;
}

const MobileMenu = (props: props): JSX.Element => {
  const { menuToggle, setMenuToggle } = props;
  return (
    <div className={`mobile-menu ${menuToggle && "left-active"}`}>
      <img
        className="icon-close cursor-pointer"
        src={iconClose}
        alt="close"
        onClick={() => {
          setMenuToggle(!menuToggle);
        }}
      />
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
      <ul>
        <li>
          <a href="./">My orders</a>
        </li>
        <li>
          <a href="./">My account</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="./" className="email">
            example@example.com
          </a>
        </li>
        <li>
          <a href="./" className="sign-out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
