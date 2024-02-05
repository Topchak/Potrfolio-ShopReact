// NavbarMobile.js
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../../Context/ShopContex';
import './NavbarMobile.css';

const NavbarMobile = () => {
  const { openBurger, handleOpenMobileMenu } = useContext(ShopContext);

  return (
    <>
      <div className={`burger-icon ${openBurger ? 'open' : ''}`} 
        onClick={handleOpenMobileMenu}>
        &#10005;
      </div>
      <nav className={`navbar-mobile ${openBurger ? 'open' : ''}`}>
        <ul className="navbar-mobile-list">
          <li>
            <NavLink className='navbar-mobile-item' 
              onClick={handleOpenMobileMenu} 
              to='/'>Shop</NavLink>
          </li>
          <li>
            <NavLink
              className='navbar-mobile-item'
              onClick={handleOpenMobileMenu}
              to='/men'>Men</NavLink>
          </li>
          <li>
            <NavLink
              className='navbar-mobile-item'
              onClick={handleOpenMobileMenu}
              to='/women'>Women</NavLink>
          </li>
          <li>
            <NavLink
              className='navbar-mobile-item navbar-mobile-item-login'
              onClick={handleOpenMobileMenu}
              to='/login'>Login</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavbarMobile;
