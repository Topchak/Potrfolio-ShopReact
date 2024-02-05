import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContex'
import './CSS/ShopCategory.css'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

function ShopCategory(props) {
  const {products} = useContext(ShopContext)

  const element = products
                    .filter(item => item.category === props.category)
                    .map((item, i)=> <Item key={i} {...item} />)
  return (
    <div className="shop-category">
      <div className="container">
        <img className="shop-category-banner" src={props.banner} alt="banner" />
        <div className="shop-category-indexSort">
          <p>
            <span> Showing 1-12 </span>out of {element.length} products
          </p>
          <div className="shop-category-sort">
            Sort by <img src={dropdown_icon} alt="dropdown" />
          </div>
        </div>
        <div className="shop-category-products">
        {element}
        </div>
      </div>
    </div>
  )
}
export default ShopCategory