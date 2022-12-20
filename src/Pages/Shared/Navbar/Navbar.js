import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/aide-logo (1).png";
import "./Navbar.css";

const Navbar = () => {
    return (
      <div>
        <nav>
          <h2 className="logo">
            <img src={logo} alt="" />ide
          </h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default Navbar;