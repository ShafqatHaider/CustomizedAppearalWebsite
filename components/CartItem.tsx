
import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import type { CartItem as CartItemType } from '../types';
import { PlusIcon, MinusIcon, TrashIcon } from './icons';

const CartItem: React.FC<CartItemType> = (item) => {
    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

    return (
        <div className="flex items-center space-x-4 p-2 -mx-2 rounded-lg hover:bg-slate-50 transition-colors">
            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
            <div className="flex-grow">
                <h4 className="font-semibold text-slate-800">{item.name}</h4>
                <p className="text-sm text-slate-500">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2 space-x-2">
                    <button 
                      onClick={() => decreaseCartQuantity(item.id)}
                      className="flex items-center justify-center w-7 h-7 bg-slate-200 text-slate-600 rounded-full hover:bg-slate-300 transition"
                      aria-label="Decrease quantity"
                    >
                        <MinusIcon />
                    </button>
                    <span className="font-medium text-slate-800 w-6 text-center">{item.quantity}</span>
                     <button 
                      onClick={() => increaseCartQuantity(item)}
                      className="flex items-center justify-center w-7 h-7 bg-slate-200 text-slate-600 rounded-full hover:bg-slate-300 transition"
                      aria-label="Increase quantity"
                    >
                        <PlusIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
            <div className="text-right">
                <p className="font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="mt-2 text-slate-400 hover:text-red-500 transition"
                  aria-label="Remove item"
                >
                    <TrashIcon />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
