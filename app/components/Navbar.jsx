"use client"
import Link from 'next/link';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import { useContext } from 'react';

const Navbar = () => {
  const { totalItems } = useContext(ShoppingCartContext);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
        E-commerce
        </Link>
        <div className="flex items-center">
         
          <Link href="/" className="text-white ml-4">
            Home
          </Link>
          <Link href="/products" className="text-white ml-4">
            Products
          </Link>
          <Link href="/cart" className="text-white ml-4">
              <span>Cart ({totalItems})</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
