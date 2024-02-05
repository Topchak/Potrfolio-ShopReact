import { useState, useEffect } from 'react'

import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

function Popular() {
  const [popular, setPopular] = useState([])
   
  useEffect(() => {
    setPopular(data_product)
  }, [])

  return (
    <div className="popular">
      <div className="container">
        <h2>Popular in women</h2>
        <hr/>
          <div className="popular-items">
            {popular.map((item, i) => {
              return <Item key={i} {...item}/>
            })}
          </div>
      </div>
    </div>
  )
}
export default Popular