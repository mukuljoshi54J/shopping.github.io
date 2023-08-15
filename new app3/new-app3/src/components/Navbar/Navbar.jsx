import React from 'react'
import '../Navbar/navbar.css'
import {ShoppingCart} from 'phosphor-react'

import {Link} from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className='navbar'>
      
        <div className='links'>
        
        <Link to='/' className='icon_cart'>Shop</Link>
        
       <div>
       <Link to='/cart'>
        <ShoppingCart className='icon_cart' style={{border:'none'}} size={32}/>

        </Link>
       </div>
        
        </div>
    </div>
  )
}
