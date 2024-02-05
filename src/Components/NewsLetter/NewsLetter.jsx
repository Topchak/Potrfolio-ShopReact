import './NewsLetter.css';

function NewsLetter() {
  return (
    <div className="newsLetter">
      <div className="container">
        <h2>Get Exclusive Offers On Your Email</h2>
        <p>Subscribe to our newletter and stay updated</p>
        <div className="newsLetter-input-wrapper">
          <input type="text" placeholder="Enter Your Email id" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
export default NewsLetter