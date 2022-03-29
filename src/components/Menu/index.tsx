import React from "react";
import "./Menu.scss";

const Menu = (): JSX.Element => {
  return (
    <div className={`Menu `}>
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
