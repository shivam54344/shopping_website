import React from 'react'
import './style.css'
import CartImg from '../../Images/10.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='nav-container'>
        <div className='store-title'>RM Stores</div>
        <div className='pages'>
            <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
        <div className='search'>
            <input type='text' placeholder='Search here...' pattern='[a-zA-Z]+'/>
        </div>
        <div className='cart-btn'>
          <Link to='/cart'>
            <img src={CartImg} alt='No Preview' className='cart-img' />
            <div className='cart-label'>0</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
