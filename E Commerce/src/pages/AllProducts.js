import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';

const AllProducts = () => {
  const { products, filterProducts } = useContext(ProductsContext);

  return (
    <div className="container mx-auto p-4">
      <Filters applyFilters={filterProducts} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default AllProducts;
