"use client"

import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ShoppingCartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: product?.id,
      name: product?.name,
      price: product?.price,
      image: product?.image,
      quantity: parseInt(quantity)
    });
    // Reset quantity after adding to cart
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">

      <img
        src={product?.image}
        alt={product?.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product?.name}</h2>
        <p className="text-gray-600">${product?.price?.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <label className="mr-2">Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-2 rounded-md focus:outline-none"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
