import React from 'react';
import './pagination.css';

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="Pagination">
      <button
        onClick={handlePreviousClick} // Updated onClick handler
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
        onClick={handleNextClick} // Updated onClick handler
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

function Footer({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="footer">
      {/* Pagination component placed inside the Footer */}
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = React.useState(1); // Use React.useState for state management
  const totalPages = 10;

  return (
    <div className="App">
      {/* Footer component with Pagination and additional content */}
      <Footer currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}
