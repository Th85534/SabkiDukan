import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


export const Item = (props) => {
  return (
    <div className='prod_card'>
          <Link to={`/product/${props.id}`}><img className="prod_img" onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <div className="description-box">
          <p>{props.name}</p>
          <div className="item-prices">
              <div className="item-price-new">
                ${props.new_price}
              </div>
              <div className="item-old-price">
                ${props.old_price}
              </div>
          </div>
        </div>
    </div>
  )
}


export default Item