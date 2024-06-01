import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import './tailwind.css';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000'); // Example URL


        
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  const filterProducts = (filters) => {
    let filtered = [...products];
    if (filters.category) filtered = filtered.filter(product => product.category === filters.category);
    if (filters.company) filtered = filtered.filter(product => product.company === filters.company);
    if (filters.rating) filtered = filtered.filter(product => product.rating >= filters.rating);
    if (filters.minPrice) filtered = filtered.filter(product => product.price >= filters.minPrice);
    if (filters.maxPrice) filtered = filtered.filter(product => product.price <= filters.maxPrice);
    if (filters.availability) filtered = filtered.filter(product => product.availability.toString() === filters.availability);
    setFilteredProducts(filtered);
  };

  return (
    <ProductsContext.Provider value={{ products: filteredProducts, filterProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
