import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { shoppingCartContext } from '../../context/context';

function ProductDetail() {


  const { id } = useParams();
  const navigate = useNavigate()
  const {
    loading,
    setLoading,
    productDetails,
    setProductDetails,
    handleAddToCart,
    cartItems,
  } = useContext(shoppingCartContext);

  async function fetchProductDetails() {
    setLoading(true);
    try {
      const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await apiResponse.json();

      if (result) {
        setProductDetails(result);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  // 🔐 Safety check before rendering
  if (loading || !productDetails) {
    return <h1>Product details are loading, please wait...</h1>;
  }

  

  function navigateBack(){
    navigate("/")
  }

  return (
    <div>
      <div className="p-6 lg:max-10xl max-w-4xl">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-14 shadow-sm p-6">
          {/* Left Side – Image Section */}
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-lg relative">
              <img
                className="w-4/5 rounded object-cover"
                src={productDetails.thumbnail}
                alt={productDetails.title}
              />
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {productDetails.images?.map((imageItem) => (
                <div key={imageItem} className="rounded-xl p-4 shadow-md">
                  <img
                    className="w-24 cursor-pointer"
                    src={imageItem}
                    alt="Product Secondary"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side – Details Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#333333]">
              {productDetails.title}
            </h2>

            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-xl font-bold">${productDetails.price}</p>
            </div>

            <div className="flex justify-between flex-wrap gap-4 mt-4">
              <p className="text-xl font-light">{productDetails.description}</p>
              <p className="text-xl font-light">Rating: {productDetails.rating}</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-xl font-light">Brand: {productDetails.brand}</p>
              <p className="text-xl font-light">Category: {productDetails.category}</p>
              <p className="text-xl font-light">In Stock: {productDetails.stock}</p>
              <p className="text-xl font-light">
                Discount: {productDetails.discountPercentage}%
              </p>


              <p className='text-xl font-light'>Width: {productDetails?.dimensions?.width}</p>
              <p className='text-xl font-light'>Height: {productDetails?.dimensions?.height}</p>
              <p className='text-xl font-light'>Depth: {productDetails?.dimensions?.depth}</p>
            </div>

            <div>
              <button
              disabled={cartItems.findIndex(item=> item.id === productDetails.id) > -1} 
              onClick={()=>handleAddToCart(productDetails)} 
              className="disabled:opacity-65 min-w-[200px] px-4 py-3 border border-[#333333] bg-transparent text-sm font-semibold rounded mt-5">
                Add to cart
              </button>

              <button onClick={navigateBack} className="min-w-[200px] px-4 py-3 border border-[#333333] bg-transparent text-sm font-semibold rounded mt-5">
                Go Back Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
