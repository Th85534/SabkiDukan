import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import ProductDisplay from '../ProductDisplay/ProductDisplay'

const RelatedProducts = () => {
  return (
    <div className='related-products'>
        <h2>You might also like...</h2>
        <hr />
        <div className="related-products-item">
            {data_product.map((item,i)=>{
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} onClick={() => ProductDisplay(item)}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts