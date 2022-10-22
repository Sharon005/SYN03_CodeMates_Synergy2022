import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {

  return (
    <div className="header">
        {/* <img className="header__logo" src="https://pngimg.com/uploads/book/small/book_PNG51104.png" alt=""/> */}
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h1 className="header__heading">CRESCENDO 2K22</h1>
        </Link>
        

        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello,</span>
            <Link to='/login' style={{ textDecoration: 'none' }}>
                <span className="header__optionLineTwo">Sign In</span>
            </Link>
            
        </div>

          <div className="header__optionBasket">
            {/* <ShoppingBasketIcon /> */}
            {/* <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span> */}
          </div>
      </div>
    </div>
  );
}

export default Header;
