import { Link } from "react-router-dom";
import "./Breadcrums.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrums = (props) => {
  const { product } = props;

  return (
    <div className="breadcrums">
      <div className="container">
          <Link to={"/"} className="breadcrums-link">
            HOME <img src={arrow_icon} alt="arrow-icon" />
          </Link>
          <Link to={`/${product.category}`} className="breadcrums-link">
            {product.category} <img src={arrow_icon} alt="arrow-icon" />
          </Link>
          <span className="breadcrums-name">{product.name}</span>
        </div>
    </div>
  );
};
export default Breadcrums;
