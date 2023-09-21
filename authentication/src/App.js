import React from 'react';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import MainProductsPage from './Components/ProductsPage';
import HomePage from './Components/HomePage';
import LoginForm from './Components/LoginForm';
import Cart from './Components/CartPage';
import NotFound from './Components/NotFoundPage';
import './App.css';

const App = () => {
  const token = Cookies.get('jwt_token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />

        <Route
          path="/"
          element={
            token ? (
              <>
                <Route index element={<HomePage />} />
                <Route path="/products" element={<MainProductsPage />} />
                <Route path="/cart" element={<Cart />} />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
