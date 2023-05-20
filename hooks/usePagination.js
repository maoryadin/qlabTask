import { useState } from 'react';

export const usePagination = (initialData, initialPerPage) => {
  const [perPage, setPerPage] = useState(initialPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePerPageChange = (value) => {
    setPerPage(value);
    setCurrentPage(1); // reset current page when per page changes
  }

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentData = initialData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (endIndex >= initialData.length) return; // don't go beyond last page
    setCurrentPage(currentPage + 1);
  }

  const handlePrevPage = () => {
    if (currentPage === 1) return; // don't go below page 1
    setCurrentPage(currentPage - 1);
  }

  return {
    perPage,
    setPerPage,
    currentPage,
    setCurrentPage,
    handlePerPageChange,
    currentData,
    handleNextPage,
    handlePrevPage,
    startIndex,
    endIndex,
  };
};