
import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { ShoppingBagIcon } from './icons';

const Header: React.FC = () => {
    const { openCart, cartQuantity } = useShoppingCart();

    return (
        <header className="bg-white shadow-md sticky top-0 z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-slate-800 tracking-wider">B&A Co.</span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <button
                            onClick={openCart}
                            className="relative p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                            aria-label="Open shopping cart"
                        >
                            <ShoppingBagIcon />
                            {cartQuantity > 0 && (
                                <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 bg-indigo-600 text-white text-xs font-bold rounded-full">
                                    {cartQuantity}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
