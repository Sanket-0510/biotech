import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/savedList">SavedList</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
