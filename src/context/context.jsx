// Create a context
//Provie state to context
//wrap context in root component
//consume the context using useContext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const shoppingCartContext = createContext(null)



function ShoppingCartProvider({children}){

  const [loading, setLoading] = useState(false)
  const [listOfProducts, setListOfProducts] = useState([])
  const [productDetails, setProductDetails] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const navigate = useNavigate()


  async function fetchListOfProducts() {

    setLoading(true)
    
    try {
      const response = await fetch('https://dummyjson.com/products');
      const result = await response.json();
  
      if (result?.products) {
        setListOfProducts(result.products);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false); 
    }
  }

  function handleAddToCart (getProductDetails){
    console.log(getProductDetails);

    let copyExistingItems = [...cartItems]

    const findIndexOfCurrentItem = copyExistingItems.findIndex(cartItem=>cartItem.id===getProductDetails.id)

    console.log(findIndexOfCurrentItem);

    if(findIndexOfCurrentItem === -1){
      copyExistingItems.push({
        ...getProductDetails,
        quantity : 1,
        totalPrice : getProductDetails?.price
      })
    }else{

    }

    setCartItems(copyExistingItems)
    localStorage.setItem('cartItems', JSON.stringify(copyExistingItems))
    navigate("/cart")
    
  }

  useEffect(()=>{

    fetchListOfProducts()

  },[])

  console.log(cartItems);
  console.log(loading);


  
  


  return <shoppingCartContext.Provider value={{
    listOfProducts, 
    loading, 
    setLoading, 
    productDetails, 
    setProductDetails,
    handleAddToCart,
    cartItems,

  }}>{children}</shoppingCartContext.Provider>


}

export default ShoppingCartProvider