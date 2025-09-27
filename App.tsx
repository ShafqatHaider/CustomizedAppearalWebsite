
import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { PRODUCTS } from './constants';

function App() {
  return (
    <ShoppingCartProvider>
      <div className="bg-slate-100 min-h-screen font-sans">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-2 tracking-tight">Our Collection</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Discover our exclusive collection of custom-designed badges and apparel.</p>
          </div>
          <ProductList products={PRODUCTS} />
        </main>
        <ShoppingCart />
        <footer className="bg-slate-800 text-slate-400 text-center p-4 mt-12">
            <p>&copy; 2024 Badge & Apparel Co. All rights reserved.</p>
        </footer>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
