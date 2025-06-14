import { Route, Routes } from 'react-router-dom';
import ProductList from './pages/productList/ProductList';
import ProductDetail from './pages/productDetails/ProductDetail';
import CartList from './pages/cartList/CartList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route path='/product-details/:id' element={<ProductDetail />} />
      <Route path='/cart' element={<CartList />} />
    </Routes>
  );
}

export default App;