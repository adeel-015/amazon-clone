import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [ {basket, user} , dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""
        />
        <div className="header__india">
          <p>.in</p>
        </div>
      </Link>
      <span className="header__location">
        <FmdGoodOutlinedIcon fontSize="small"/>
      </span>
      <div className="header__option">
        <span className="header__optionLineOne" id="pincode">Delivering to Delhi 110025</span>
        <span className="header__optionLineTwo">{user ? 'Sign Out to update.' : 'Sign in to update.'}</span>
      </div>
      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search Amazon.in" />
        <SearchIcon className="header__searchIcon" />
        {/* Logo */}
      </div>

      <div className="header__option">
        <span className="header__optionLineTwo" id="lang">🇮🇳EN</span>
      </div>
      <div className="header__nav">
        <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne rightLineOne">Hello {!user ? 'Guest' : user.email}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>

        <Link to='/orders' className="header__option">
          <div className="header__option">
            <span className="header__optionLineOne rightLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartCheckoutOutlinedIcon fontSize="large"/>
            <span className="header__optionLineTwo header__optionBasketCount">{basket?.length}</span>
            <span className="header__optionLineTwo" id="cart">Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
