import React from "react";
import "./Menu.scss";

interface props {
  activeState: boolean;
}

const Menu = (props: props): JSX.Element => {
  return (
    <div className={`Menu ${props.activeState && "Menu-active"}`}>
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export { Menu };
