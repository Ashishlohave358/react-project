import React from 'react'

function Pages({ totalPages, setCurrentPage }) {

  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page) => (
        <button key={page} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pages;
