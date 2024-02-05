import {Link} from 'react-router-dom';
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

import './Social.css'
const Social = () => {
  return (
    <div className="social">
    <div className="social-wrapper">
      <Link to='https://www.instagram.com' target='_blank' className="social-link">
        <img src={instagram_icon} alt="instagram-icon"/>
      </Link>
      <Link to='https://www.pinterest.com' target='_blank' className="social-link">
        <img src={pintester_icon} alt="pinterest-icon"/>
      </Link>
      <Link to='https://www.whatsapp.com' target='_blank' className="social-link">
        <img src={whatsapp_icon} alt="whatsapp-icon"/>
      </Link>
    </div>
  </div>
  )
}
export default Social