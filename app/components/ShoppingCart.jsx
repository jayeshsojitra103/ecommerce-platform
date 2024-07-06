"use client"
import { useContext } from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const ShoppingCart = () => {
  const { cartItems, totalItems, totalPrice, removeFromCart } = useContext(ShoppingCartContext);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems?.map(item => (
            <div key={item?.id} className="flex items-center justify-between border-b border-gray-200 py-2">
              <div className="flex items-center space-x-4">
                <img src={item?.image} alt={item?.name} className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <p className="text-lg font-semibold">{item?.name}</p>
                  <p className="text-gray-600">${item?.price?.toFixed(2)}</p>
                  <p className="text-gray-500">Quantity: {item?.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item?.id)}
                className="text-red-500 hover:text-red-600 focus:outline-none"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-gray-700 text-lg">Total Items: {totalItems}</p>
            <p className="text-gray-700 text-lg">Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded-md focus:outline-none">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
