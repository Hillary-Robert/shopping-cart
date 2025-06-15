import React, { Fragment, useContext } from 'react'
import { shoppingCartContext } from '../../context/context'

function CartItem({singleCartItem}) {

  
  

  const {handleRemoveFromCart, handleAddToCart} = useContext(shoppingCartContext)
  return (


    <Fragment>

      <div className='grid grid-cols-3 items-start gap-5 mb-10'>

      <div className='col-span-2 flex items-start gap-4'>

        <div className='w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm'>

          <img 
          className='w-full h-full object-contain'
          src={singleCartItem?.thumbnail} 
          alt={singleCartItem?.title}  
          />

        </div>

        <div>
          <h3 className='text-base font-bold text-gray-900 mb-2'>{singleCartItem?.title}</h3>
          

          <button onClick={()=>handleRemoveFromCart(singleCartItem, true)} className='text-sm px-4 py-3 bg-black text-white font-bold mt-3'>Remove</button>
        </div>

      </div>

      <div className='ml-auto '>

        <h3 className='text-lg font-bold text-gray-900'>
          {singleCartItem?.totalPrice ? singleCartItem.totalPrice.toFixed(2) : '0.00'}
        </h3>

        <p className='font-bold mt-2 mb-2'>Quantity: {singleCartItem?.quantity}</p>

        <div className='mt-3'>
          <button
          disabled={singleCartItem?.quantity === 1} 
          onClick={()=>handleRemoveFromCart(singleCartItem, false)} 
          className='disabled:opacity-50 border border-[#000000] p-3 text-lg font-bold'>-</button>

          <button onClick={()=>handleAddToCart(singleCartItem)} className='border border-[#000000] p-3 text-lg font-bold'>+</button>
        </div>

      </div>
    </div>

    <hr className='border-gray-500 p-4'/>


  </Fragment>
    
  )
}

export default CartItem