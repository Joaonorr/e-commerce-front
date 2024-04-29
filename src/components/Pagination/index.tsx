import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      {currentPage !== 1 && (
        <button onClick={() => handlePageChange(currentPage - 1)}>
          Previous
        </button>
      )}
      <button onClick={() => handlePageChange(currentPage)} disabled>
        {currentPage}
      </button>
      {currentPage <= totalPages - 1 && (
        <button onClick={() => handlePageChange(currentPage + 1)}>
          {currentPage + 1}
        </button>
      )}
      {currentPage <= totalPages - 2 && (
        <button onClick={() => handlePageChange(currentPage + 2)}>
          {currentPage + 2}
        </button>
      )}
      {currentPage !== totalPages && (
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
