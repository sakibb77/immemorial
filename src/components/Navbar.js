import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapDownStagger } from "../hooks/gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const fevRef = useRef(null);
  const logoRef = useRef(null);

  const liArr = [li1, li2, li3];
  const favArr = [fevRef];
  const logoArr = [logoRef];

  useGsapDownStagger(liArr, 1.2);
  useGsapDownStagger(favArr, 2);
  useGsapDownStagger(logoArr, 1.5);

  return (
    <nav className="wrapper navbar">
      <ul className="links">
        <li ref={li1}>
          <Link to={"/featured"}>featured</Link>
        </li>
        <li ref={li2}>
          <Link to={"/about"}>about</Link>
        </li>
        <li ref={li3}>
          <Link to={"/gallery"}>gallery</Link>
        </li>
      </ul>
      <div className="logo" ref={logoRef}>
        <Link to={"/"}>
          <h3>immemorial</h3>
        </Link>
      </div>
      <div className="fav-link" ref={fevRef}>
        <Link to={"/favourites"}>favourites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
