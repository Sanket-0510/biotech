import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Import the CSS file

const Navbar = () => {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");
  };

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
          {token ? (
            // If token is present, show "Log Out" link with logout handler
            <Link to="/logout" onClick={handleLogout}>
              Log Out
            </Link>
          ) : (
            // If no token, show "Sign In" link
            <Link to="/signin">Sign In</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
