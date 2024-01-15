// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import custom CSS

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="logo" to="/">
          Your Blog
        </Link>
        <div className="nav-buttons">
          <Link className="nav-button" to="/blogs">
            Blogs
          </Link>
          <Link className="nav-button" to="/portfolio">
            Portfolio
          </Link>
          <Link className="nav-button" to="/bio">
            Bio
          </Link>
          <Link className="nav-button" to="/podcast">
            Podcast
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
