import React from 'react';

interface PaginationProps {
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange }) => {

    const pages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className="flex justify-center m-8">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`mx-2 px-4 py-2 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                >
                    {page + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
