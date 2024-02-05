import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContex";
import logo from "../Assets/logo.png";
import cart_img from "../Assets/cart_icon.png";
import Burger from "./Burger/Burger";
import "./Navbar.css";
import NavbarMobile from "./NavbarMobile/NavbarMobile";


function Navbar() {
  const { getTotalCartItems, handleOpenMobileMenu } = useContext(ShopContext);

  return (
    <>
      <div className="navbar">
        <div className="container container--header">
          <div className="navbar-row">
            <NavLink className="nav-logo" end to="/">
              <img src={logo} alt="logo" />
              <p>SHOPPER</p>
            </NavLink>
            <ul className="nav-menu">
              <li>
                <NavLink end to="/">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/men">Men</NavLink>
              </li>
              <li>
                <NavLink to="/women">Women</NavLink>
              </li>
              <li>
                <NavLink to="/kids">Kids</NavLink>
              </li>
            </ul>
            <div className="nav-right-wrapper">
              <NavLink className="nav-login" to="/login">
                <button>Login</button>
              </NavLink>
              <NavLink className="nav-cart" to="/cart">
                <img src={cart_img} alt="cart" />
              </NavLink>
              <div className="nav-cart-count">{getTotalCartItems()}</div>
              <Burger onClick={handleOpenMobileMenu} />
            </div>
          </div>
        </div>
        <NavbarMobile/>
      </div>
    </>
  );
}
export default Navbar;
