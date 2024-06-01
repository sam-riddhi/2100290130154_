import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
          <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>&laquo;</button>
        </li>
        {getPageNumbers().map(page => (
          <li key={page} className={`page-item ${page === currentPage && 'active'}`}>
            <button className="page-link" onClick={() => handlePageChange(page)}>{page}</button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
          <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>&raquo;</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
