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
        onClick={handlePreviousClick} 
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
        onClick={handleNextClick} 
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
     
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = React.useState(1); 
  const totalPages = 10;

  return (
    <div className="App">
      <Footer currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}
