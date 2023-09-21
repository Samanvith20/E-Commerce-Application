import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Updated import
import ProtectedRoute from './Components/ProtectedRoute';
import MainProductsPage from './Components/ProductsPage'; // Remove '/components'
import HomePage from './Components/HomePage';
import LoginForm from './Components/LoginForm';
import Cart from './Components/CartPage';
import NotFound from './Components/NotFoundPage';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <ProtectedRoute exact path ="/" element ={<HomePage/>}/> 
      <Route path="/login" element={<LoginForm />} />
      <Route path="/products" element={<MainProductsPage />} /> {/* Updated path */}
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
