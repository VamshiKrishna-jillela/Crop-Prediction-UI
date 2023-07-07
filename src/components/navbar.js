import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMediaIcons(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("onclick", handler);

    return () => {
      document.removeEventListener("onclick", handler);
    };
  });

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2 className="logo-span">
            <span>S</span>mart
            <span> F</span>arming
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
          ref={menuRef}
        >
          <ul>
            <li style={{ fontSize: "2.5rem" }}>
              <Link onClick={() => setShowMediaIcons(!showMediaIcons)} to="/">
                Home
              </Link>
            </li>
            <li style={{ fontSize: "2.5rem" }}>
              <Link
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                to="/analysis"
              >
                Crop Analysis
              </Link>
            </li>

            <li style={{ fontSize: "2.5rem" }}>
              <Link
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                to="/form"
              >
                Manual Input
              </Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <div className="hamburger-menu">
            <div onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
