import React from 'react'
import './style.css'
import CartImg from '../../Images/10.png'

const Navbar = () => {
  return (
    <>
      <div className='nav-container'>
        <div className='store-title'>RM Stores</div>
        <div className='pages'>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>
        <div className='search'>
            <input type='text' placeholder='Search here...' pattern='[a-zA-Z]+'/>
        </div>
        <div className='cart-btn'>
                <img src={CartImg} alt='No Preview' className='cart-img' />
                <div className='cart-label'>0</div>
        </div>
      </div>
    </>
  )
}

export default Navbar
