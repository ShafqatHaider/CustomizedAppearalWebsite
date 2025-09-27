
import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import { XIcon, ShoppingBagIcon } from './icons';

const ShoppingCart: React.FC = () => {
  const { isCartOpen, closeCart, cartItems, cartTotal } = useShoppingCart();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-30 transition-opacity duration-300 ease-in-out ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800">Shopping Cart</h2>
            <button
              onClick={closeCart}
              className="p-2 rounded-full text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              aria-label="Close shopping cart"
            >
              <XIcon />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
              <ShoppingBagIcon className="w-24 h-24 text-slate-300 mb-4" />
              <h3 className="text-xl font-semibold text-slate-700">Your cart is empty</h3>
              <p className="text-slate-500 mt-1">Add some items to get started!</p>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="p-6 border-t border-slate-200 bg-slate-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium text-slate-600">Subtotal</span>
                <span className="text-2xl font-bold text-slate-900">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-slate-400">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
