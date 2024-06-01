import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find(p => p.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{product.productName}</h2>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductDetails;
