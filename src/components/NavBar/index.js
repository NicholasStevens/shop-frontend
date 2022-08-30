import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <h3>The Shop</h3>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/">About</NavLink>
    </div>
  );
}

export { NavBar };
