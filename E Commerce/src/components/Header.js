import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl">E-Commerce App</h1>
      <nav>
        <Link to="/" className="px-4 py-2 rounded hover:bg-blue-700">All Products</Link>
      </nav>
    </div>
  </header>
);

export default Header;
