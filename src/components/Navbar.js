import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="wrapper navbar">
      <ul className="links">
        <li to={"/featured"}>
          <Link>featured</Link>
        </li>
        <li>
          <Link to={"/about"}>about</Link>
        </li>
        <li>
          <Link to={"/gallery"}>gallery</Link>
        </li>
      </ul>
      <div className="logo">
        <Link to={"/"}>
          <h3>immemorial</h3>
        </Link>
      </div>
      <div className="fav-link">
        <Link to={"/favourites"}>favourites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
