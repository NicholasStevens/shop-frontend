import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import TheShop from "./TheShop.png";
import { MdPersonOutline } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

function NavBar() {
  return (
    <div className="navbar_container">
      <div className="navbar_navigate">
        <div className="navbar_nav">
          <img src={TheShop} alt="" className="logo" />
          <NavLink to="/" className="links">
            Home
          </NavLink>
          <NavLink to="/shop" className="links">
            Shop
          </NavLink>
          <NavLink to="/" className="links">
            About
          </NavLink>
        </div>
        <div>
          <input type="text" className="navbar_search"></input>
        </div>
      </div>
      <div className="navbar_links">
        <MdPersonOutline className="links" />
        <MdShoppingCart className="links" />
        <MdFavoriteBorder className="links" />
      </div>
    </div>
  );
}

export { NavBar };
