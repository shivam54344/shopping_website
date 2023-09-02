import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

const Card = ({ Data, Id }) => {
  const Navigate = useNavigate();
  return (
    <div className='card-container'>
      <div className='card-image'>
        <img src={Data.images.nodes[0].src} alt='No preview' />   
      </div>
      <div className='card-details'>
        <div style={{ fontSize: '1rem', fontWeight: 'bold' }} onClick={() => Navigate(`/product-page/${Data.handle}/${Id}`)}>{Data.title}</div>      
      </div>
      <div className='card-btn-container'>
          <div>&#8377; 550</div>
          <div className='card-cart-btn'>Add to cart</div>  
      </div>
    </div>
  )
}

export default Card
