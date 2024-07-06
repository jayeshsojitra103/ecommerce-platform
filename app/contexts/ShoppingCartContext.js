"use client";

import React, { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add or update an item in the cart
  const addToCart = (item) => {
    if(item.id)
   {
    const existingItemIndex = cartItems?.findIndex(cartItem => cartItem?.id === item?.id);
    if (existingItemIndex !== -1) {
      // Update quantity if item exists in cart
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item?.quantity;
      setCartItems(updatedCartItems);
    } else {
      // Add new item to cart
      setCartItems(prevItems => [...prevItems, item]);
    }
   }
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  // Calculate total items whenever cartItems change
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Calculate total price whenever cartItems change
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Context provider value
  const contextValue = {
    cartItems,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
