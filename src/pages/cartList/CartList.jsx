import React, { useContext } from 'react'
import { shoppingCartContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

function CartList() {
  const navigate = useNavigate()
  const {
    loading,
    setLoading,
    productDetails,
    setProductDetails,
    handleAddToCart,
    cartItems,
  } = useContext(shoppingCartContext);

  return (
    <div className='max-w-5xl mx-auto max-md:max-w-xl py-4'>

      <h1 className='text-2xl font-bold text-gray-800 text-center'>My cart Page</h1>

      <div className='grid md:grid-cols-3 gap-8 mt-12'>

        <div className='md:col-span-2 space-y-4'>



        </div>

        <div className='bg-gray-100 rounded-sm p-4 h-max'>
          <h3 className='text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2'>Order Summary</h3>

          <ul className='text-gray-700 mt-4 space-y-2'>

            <p className='flex flex-wrap gap-4 text-sm font-bold'>
              Total <span></span>
            </p>

          </ul>

          <div className='mt-5 space-y-2'>
            <button className='text-sm px-4 py-3 bg-black text-white font-bold'>Checkout</button>

            <button onClick={()=>navigate("/")} className='text-sm px-4 py-3 bg-transparent text-black font-bold ml-6 border border-black'>Continue Shopping</button>
          </div>

        </div>

      </div>


    </div>
  )
}

export default CartList