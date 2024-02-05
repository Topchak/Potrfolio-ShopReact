import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
function Hero() {
  return (
    // <div className="hero">
    //   <div className="container">
    //     <div className="hero-row">
    //       <div className="hero-left">
    //         <h1>New arrivals only</h1>
    //         <div>
    //           <div className="hero-hand-icon">
    //             <p>new</p>
    //             <img src={hand_icon} alt="hand-icon"/>
    //           </div>
    //           <p>collections for everyone</p>
    //         </div>
    //         <div className="hero-latest-btn">
    //           <div>Latest collection</div>
    //           <img src={arrow_icon} alt="arrow-icon"/>
    //         </div>
    //       </div>
    //       <div className="hero-right">
    //         <img src={hero_image} alt="hero-icon"/>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="hero">
    <div className="container">
      <div className="hero-row">
        <div className="hero-left">
          <p className="hero-left-mark">New arrivals only</p>
            <div className="hero-hand-icon">
              <p className='hero-left-p-h1'>new</p>
              <img src={hand_icon} alt="hand-icon"/>
            </div>
            <h1>collections for everyone</h1>
          <div className="hero-latest-btn">
            <div>Latest collection</div>
            <img src={arrow_icon} alt="arrow-icon"/>
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="hero-icon"/>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Hero