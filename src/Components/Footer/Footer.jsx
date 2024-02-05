import {Link} from 'react-router-dom';
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'

import Social from '../Social/Social';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-logo">
            <img src={footer_logo} alt="footer-logo"/>
            <p>SHOPER</p>
          </div>
          <ul className="footer-links">
            <li>
              <Link to='/'>Company</Link>
            </li>
            <li>
              <Link to='/'>Products</Link>
            </li>
            <li>
              <Link to='/'>Offices</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
            <li>
              <Link to='/'>Contacts</Link>
            </li>
          </ul>
          <Social/>
          <div className="footer-copyright">
            <hr/>
            <p>Copyright © 2023 Shoper. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer