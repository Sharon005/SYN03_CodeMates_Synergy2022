import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {

  return (
    <div className="header">
        <Link to='/' style={{ textDecoration: 'none' }}>
        <img className="header__logo" src={logo} alt=""/>
        
          {/* <h1 className="header__heading">CRESCENDO 2K22</h1> */}
        </Link>
        

        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello,</span>
            <span className="header__optionLineTwo">Admin</span>
            
            
        </div>

        
      </div>
    </div>
  );
}

export default Header;
