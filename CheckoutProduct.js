import React, { useState } from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({id,image,title,price,rating}) {
  const [{basket},dispatch]= useStateValue();

const removeFromBasket = () => {
  // remove item form the basket
  dispatch({
    type:'REMOVE_FROM_BASKET',
    id:id,
  })

}

    return (
    <div className='checkoutProduct'>
    <img className='checkoutProduct__image' src={image} alt='img'/>

    <div className='checkoutProduct__info'>
    <p className='checkoutProduct__title'>{title}
    <small>$</small>
    <strong>{price}</strong>
    </p>
    <div className='checkProduct__rating'>
    {Array(rating).fill().map((_,i) =>(
                <p>⭐</p>
               ))}
               
               
    </div>
    <button onClick={removeFromBasket}>Remove From basket</button>
    </div>
    </div>
  )
}

export default CheckoutProduct