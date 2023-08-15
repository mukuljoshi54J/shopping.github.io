import React from 'react'
import { PRODUCTS } from '../../Products'
import { Product } from './Product'
import './shop.css'



export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Dream Shopping</h1>
        </div>

        <div className='products'>
            {
                PRODUCTS.map((product,id) => 
                <div key={id}>
                <Product data = {product}/>
                </div>
                )
            }
        </div>
    </div>
  )
}
