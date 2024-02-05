import './Burger.css'

function Burger({onClick, open}) {

  return (
    <div onClick={onClick} className={`burger ${open ? 'open' : '' }`}>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
    </div>
  )
}
export default Burger