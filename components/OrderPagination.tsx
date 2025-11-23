import React from 'react';
import { Icons } from './Icons';

interface OrderPaginationProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
}

export const OrderPagination: React.FC<OrderPaginationProps> = ({
    currentPage,
    totalPages,
    setCurrentPage
}) => {
    return (
        <div className="p-4 flex justify-end items-center gap-2 text-sm text-gray-500 dark:text-white">
            <button
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="p-1 hover:text-gray-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <Icons.ChevronRight className="rotate-180" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-6 h-6 rounded flex items-center justify-center text-xs transition-colors ${currentPage === page
                        ? 'bg-gray-200 dark:bg-white/20 text-gray-900 dark:text-white font-medium'
                        : 'hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400'}`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="p-1 hover:text-gray-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <Icons.ChevronRight className="rotate-270" />
            </button>
        </div>
    );
};
