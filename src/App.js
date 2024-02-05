import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';


import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

const ShopPage = lazy(() => import('./Pages/Shop'));
const ShopCategoryPage = lazy(() => import('./Pages/ShopCategory'));
const ProductPage = lazy(() => import('./Pages/Product'));
const CartPage = lazy(() => import('./Pages/Cart'));
const LoginSingupPage = lazy(() => import('./Pages/LoginSingup'));

function App() {




  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<ShopPage/>}/>
              <Route path='/men' element={<ShopCategoryPage category='men' banner={men_banner}/>}/>
              <Route path='/women' element={<ShopCategoryPage category='women' banner={women_banner}/>}/>
              <Route path='/kids' element={<ShopCategoryPage category='kid' banner={kid_banner}/>}/>
              <Route path='/products/:productId' element={<ProductPage/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/login' element={<LoginSingupPage/>}/>
            </Routes>
          </Suspense>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
