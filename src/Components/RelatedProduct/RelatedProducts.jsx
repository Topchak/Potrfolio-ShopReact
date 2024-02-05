import './RelatedProducts.css'
// import product_data from '../Assets/data'
import Item from '../../Components/Item/Item'
function RelatedProducts({product}) {
  return (
    <div className="related-products">
      <div className="container">
        <h2>Related Products</h2>
        <hr />
        <div className="related-products-items">
          {
            product.map((item,i)=>{
              return <Item key={i} {...item} />
            })
          }
        </div>
      </div>
    </div>
  )
}
export default RelatedProducts