import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products'
import { ShopContext } from '../../Context/shop-context'
import { CartItem } from './CartItem'
import '../cart/cart.css'

import { useNavigate } from 'react-router-dom'



export const Cart = () => {
  const {cartItems,getTotalCartAmount} = useContext(ShopContext)

  const totalAmount = getTotalCartAmount()
  

  const navigate = useNavigate()

  return (
    <div className='cart'>
      
        <h1>Your Cart Items</h1>
     
      <div className='cartItems'>
        {
         
      PRODUCTS.map((product,id) => { 
      
    
        if(cartItems[product.id] !== 0){
          return (
        <CartItem key={id} data = {product}/>

          )
     
        }
        return null
})
        }
      </div>
{
  totalAmount > 0 ? 

      <div className='checkout'>
        <p>Subtotal: ${totalAmount}</p>

        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button onClick={() => alert('checkout successfully', navigate('/'))}>Checkout</button>
      </div>
      : 
      <div>
        <h1>Your Cart is Empty</h1>
      </div>
      
} 

    </div>
  )
}
