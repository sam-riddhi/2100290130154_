// api.js

import axios from 'axios';

const baseURL = 'http://20.244.56.144/test'; // Base URL of the API

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch products from the API
export const fetchProducts = async ({ company, category, top, minPrice, maxPrice }) => {
  try {
    const response = await api.get(`/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

// Other API request functions can be added here as needed

export default api;
