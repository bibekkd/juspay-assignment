import React from 'react';

interface OrderFilterProps {
    showFilter: boolean;
    statusFilter: string;
    setStatusFilter: (status: string) => void;
    setCurrentPage: (page: number) => void;
}

export const OrderFilter: React.FC<OrderFilterProps> = ({
    showFilter,
    statusFilter,
    setStatusFilter,
    setCurrentPage
}) => {
    const statuses = ['All', 'In Progress', 'Complete', 'Pending', 'Approved', 'Rejected'];

    return (
        <div className={`overflow-hidden transition-all duration-300 ${showFilter ? 'max-h-12 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
            <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500 dark:text-white">Status:</span>
                {statuses.map((status) => (
                    <button
                        key={status}
                        onClick={() => { setStatusFilter(status); setCurrentPage(1); }}
                        className={`px-3 py-1 rounded-full text-xs transition-colors ${statusFilter === status
                            ? 'bg-black text-white dark:bg-white dark:text-black'
                            : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'}`}
                    >
                        {status}
                    </button>
                ))}
            </div>
        </div>
    );
};
