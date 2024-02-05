import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContex";
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import './ProductDisplay.css'

function ProductDisplay({product}) {
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="container">
        <div className="product-display-row">
          <div className="product-display-left">
            <div className="product-display-left-img-list">
              <img src={product.image} alt="product"/>
              <img src={product.image} alt="product"/>
              <img src={product.image} alt="product"/>
            </div>
            <div className="product-display-img">
              <img className="product-display-main-img" src={product.image} alt="product"/>
            </div>
          </div>
          <div className="product-display-right">
              <h1>{product.name}</h1>
            <div className="product-display-star">
              <img src={star_icon} alt="star" />
              <img src={star_icon} alt="star" />
              <img src={star_icon} alt="star" />
              <img src={star_dull_icon} alt="star-dull" />
              <p>(123)</p>
            </div>
            <div className="product-display-right-prices">
              <div className="product-display-right-prices-old">
                ${product.old_price}
              </div>
              <div className="product-display-right-prices-new">
                ${product.new_price}
              </div>
            </div>
            <div className="product-display-right-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, repudiandae fugit. Tenetur saepe quo ratione voluptatibus iste, quaerat aliquid. Commodi.
            </div>
            <div className="product-display-right-size">
              <h3>Select Size</h3>
              <div className="product-display-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
              </div>
            </div>
            <button onClick={() => addToCart(product.id)}>Add To Cart</button>
            <p className="product-display-right-category">
              <span>Category: </span><span>{product.category}, {product.name}</span>
            </p>
            <p className="product-display-right-category"><span>Tags: </span><span>Modern</span></p>

          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDisplay