
import React from 'react';
import type { Product } from '../types';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { PlusIcon } from './icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { increaseCartQuantity } = useShoppingCart();
  const { name, price, imageUrl, category } = product;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={imageUrl} alt={name} />
        <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-slate-800 mb-2 truncate group-hover:text-indigo-600 transition-colors">{name}</h3>
        <div className="flex-grow"></div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-2xl font-bold text-slate-900">${price.toFixed(2)}</p>
          <button
            onClick={() => increaseCartQuantity(product)}
            className="flex items-center justify-center bg-slate-800 text-white rounded-full h-12 w-12 transform transition-transform duration-300 group-hover:bg-indigo-600 group-hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label={`Add ${name} to cart`}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
