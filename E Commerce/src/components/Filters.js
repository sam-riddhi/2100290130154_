import React, { useState } from 'react';

const Filters = ({ applyFilters }) => {
  const [filters, setFilters] = useState({ category: '', company: '', rating: '', minPrice: '', maxPrice: '', availability: '' });

  const handleChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4">
      <input type="text" name="category" placeholder="Category" value={filters.category} onChange={handleChange} className="border p-2 rounded" />
      <input type="text" name="company" placeholder="Company" value={filters.company} onChange={handleChange} className="border p-2 rounded" />
      <input type="number" name="rating" placeholder="Rating" value={filters.rating} onChange={handleChange} className="border p-2 rounded" />
      <input type="number" name="minPrice" placeholder="Min Price" value={filters.minPrice} onChange={handleChange} className="border p-2 rounded" />
      <input type="number" name="maxPrice" placeholder="Max Price" value={filters.maxPrice} onChange={handleChange} className="border p-2 rounded" />
      <input type="text" name="availability" placeholder="Availability" value={filters.availability} onChange={handleChange} className="border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Apply Filters</button>
    </form>
  );
};

export default Filters;
