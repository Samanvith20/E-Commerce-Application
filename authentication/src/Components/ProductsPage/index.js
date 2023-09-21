import React from 'react';
import Header from '../Header';
import AllProductsSection from '../AllProductsSection'
import PrimeDealsSection from '../PrimeDealsSection';
import './index.css';

const ProductsPage = () => (
  <>
    <Header />
    <div className="products-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="products-img"
      />
        <PrimeDealsSection />
      <AllProductsSection />
    </div>
  </>
);

export default ProductsPage;
