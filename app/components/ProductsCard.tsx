
import React from 'react'
import AddCart from './AddCart'
import style from './productCard.module.css'

const ProductsCard = () => {
  return (
    <div className='p-4 my-4 bg-slate-500 text-yellow-100 text-xl hover:bg-green-400' >
      <h1> Our Products Card</h1>

      <AddCart></AddCart>
    </div>

  )
}

export default ProductsCard