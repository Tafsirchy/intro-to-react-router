import React from "react";
import { NavLink } from "react-router";
import "./header.css"
const Header = () => {
  return (
    <div>
      <h1>This is header</h1>
      <nav>
        {/* <a href="/">Home</a>
        <a href="/mobiles">Mobiles</a>
        <a href="/laptops">Laptops</a>
        <a href=""></a> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobile</NavLink>
        <NavLink to="/laptops">Laptop</NavLink>
        <NavLink to="/">Home</NavLink>
      </nav>
    </div>
  );
};

export default Header;
