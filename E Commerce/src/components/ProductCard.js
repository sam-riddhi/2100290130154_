import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="border p-4 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold">{product.productName}</h2>
    <p>Company: {product.company}</p>
    <p>Category: {product.category}</p>
    <p>Price: ${product.price}</p>
    <p>Rating: {product.rating}</p>
    <p>Discount: {product.discount}%</p>
    <p>Availability: {product.availability}</p>
    <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">View Details</Link>
  </div>
);

export default ProductCard;
