import React from 'react'
import { useContext } from 'react';
import { ShopContext} from '../../Context/shop-context';
import '../cart/cart.css'


export const CartItem = (props) => {
    const {id,productName,price,productImage} = props.data;

    const {cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext)


  return (
    <div className='cardItem'>
        <img src={productImage} alt=''/>
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>

            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
