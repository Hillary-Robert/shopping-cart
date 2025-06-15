import { Route, Routes } from 'react-router-dom';
import ProductList from './pages/productList/ProductList';
import ProductDetail from './pages/productDetails/ProductDetail';
import CartList from './pages/cartList/CartList';
import { Fragment } from 'react';
import NavBar from './components/navBar/NavBar';

function App() {
  return (

    <Fragment>

      <NavBar/>

      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product-details/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<CartList />} />
      </Routes>


    </Fragment>
    
  );
}

export default App;