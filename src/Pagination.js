import React from 'react';

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="Pagination">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
