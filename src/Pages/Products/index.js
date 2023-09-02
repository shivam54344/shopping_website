import React from 'react'

const Products = ({ CrdList }) => {
  const index = window.location.pathname.split('/')[3];
  const obj = CrdList[index]
  return (
      <div>Hello product page {obj.title}</div>
  )
}

export default Products
