import React, { useContext } from 'react'
import { shoppingCartContext } from '../../context/context';

import ProductItem from '../../components/ProductItem/ProductItem';

function ProductList() {

  const {listOfProducts, loading} = useContext(shoppingCartContext)

  console.log(listOfProducts);
  if(loading) return <h1>Loading Data, please wait</h1>


  return <section className='py-12  sm:py-16 lg:py-20'>

    <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>

      <div className='max-w-md mx-auto text-center'>

        <h2 className='text-4xl font-extrabold text-gray-950 sm:text-4xl'>Our Products</h2>

      </div>


      <div className='grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4 sm:mt-6'>

        {
          listOfProducts  && listOfProducts.length > 0 ? listOfProducts.map(singleProduct => <ProductItem  singleProduct={singleProduct}/>)
          : <h3>No Products found</h3>
        }


      </div>


    </div>


  </section>
}

export default ProductList
