import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContex';
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'


function CartItems() {
  const {products, cartItem, removeFromCart, getTotoalCartAmont  } = useContext(ShopContext);

  return (
    <div className="cart-items">
      <hr />
      <div>
        {
          products.map(({id, image, name, new_price})=>{
            if(cartItem[id] > 0){
              return <div key={id} className="cart-items-format cart-items-format-main">
                      <img src={image} alt="" className="cart-items-product-icon" />
                      <p>{name}</p>
                      <p>${new_price}</p>
                      <button className="cart-items-quantity">{cartItem[id]}</button>
                      <p>${new_price * cartItem[id]}</p>
                      <img className="cart-items-remove-icon" src={remove_icon} alt="remove" onClick={()=> removeFromCart(id)} />
                   </div>
            }
            return null
          })
        }
      </div>
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h3>cart Totals</h3>
          <div>
            <div className="cart-items-total-item">
              <p>Subtotal</p>
              <p>${getTotoalCartAmont()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>${getTotoalCartAmont()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-items-promocode">
          <p>If you have a promocode, enter it here</p>
          <div className="cart-items-promobox">
            <input type="text" placeholder="Enter your promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartItems