import React from "react";
import logo from "../public/images/logo.png";
import '../index.css'

const Header = () => {
  return (
    <div  className="header">
    <div>
        <img src={logo}></img>
      <h1 className="logo-name">
        pma
      </h1>
    </div>
    <div className="header-right">
    <div className="category">Search</div>
    <div className="category">Add</div>
    <div className="category">Delete</div>
    <div className="category">Login</div>
    <div className="category">Register</div>
    </div>
    </div>
  );
};

export default Header;
