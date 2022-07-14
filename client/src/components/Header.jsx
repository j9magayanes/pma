import React from "react";
import { Link } from "react-router-dom";
import logo from "../public/images/logo.png";
import '../index.css'

const Header = () => {
  return (
    <div  className="header">
    <div>
         <Link to="/"><img src={logo}></img></Link> 
      <h1 className="logo-name">
        pma
      </h1>
    </div>
    <div className="header-right">
    <div className="category">Search</div>
    <div className="category"><Link to="/add">Add</Link></div>
    <div className="category">Delete</div>
    <div className="category"><Link to="/login">Login</Link></div>
    <div className="category"><Link to="/register">Register</Link></div>
    </div>
    </div>
  );
};

export default Header;
