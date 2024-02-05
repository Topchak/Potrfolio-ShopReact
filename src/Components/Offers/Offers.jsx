import './Offers.css'
import excluseive_image from '../Assets/exclusive_image.png'

function Offers() {
  return (
    <div className="offers">
      <div className="container">
        <div className="offers-row">
          <div className="offers-left">
            <h2>Exclusive Offers For You</h2>
            <p>ONLY ON BEST SELLERS PRODUCTS
            </p>
            <button>Check Now</button>
          </div>
          <div className="offers-right">
            <img src={excluseive_image} alt="exclusive"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Offers