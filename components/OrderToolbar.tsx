import React from 'react';
import { Icons } from './Icons';

interface OrderToolbarProps {
    showFilter: boolean;
    setShowFilter: (show: boolean) => void;
    handleSort: () => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    setCurrentPage: (page: number) => void;
}

export const OrderToolbar: React.FC<OrderToolbarProps> = ({
    showFilter,
    setShowFilter,
    handleSort,
    searchTerm,
    setSearchTerm,
    setCurrentPage
}) => {
    return (
        <div className="bg-bw-card-light dark:bg-bw-card-dark p-1 rounded-lg mt-2 mb-4 flex flex-col h-[44px] gap-2">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <button className="p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded transition-colors">
                        <Icons.Plus size={18} className="text-bw-bg-dark dark:text-white" />
                    </button>
                    <button
                        onClick={() => setShowFilter(!showFilter)}
                        className={`p-2 rounded transition-colors ${showFilter ? 'bg-gray-200 dark:bg-white/20 text-gray-900 dark:text-white' : 'hover:bg-gray-200 dark:hover:bg-white/10 text-gray-500 dark:text-white'}`}
                    >
                        <Icons.Filter className='text-bw-bg-dark dark:text-white' color='currentColor' />
                    </button>
                    <button
                        onClick={handleSort}
                        className="p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded transition-colors"
                        title="Sort by Date"
                    >
                        <Icons.Sort size={18} className="text-bw-bg-dark dark:text-white" />
                    </button>
                </div>
                <div className="flex items-center gap-2 w-[160px] h-[28px] bg-white dark:bg-bw-bg-dark-66 border border-gray-200 dark:border-bw-border-dark rounded-lg px-2 py-1">
                    <Icons.Search className="text-gray-400 dark:text-bw-text-dark-33" size={16} />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                        className="w-full bg-transparent text-sm text-gray-900 dark:text-bw-text-dark-33 placeholder:text-gray-400 dark:placeholder:text-bw-text-dark-33 outline-none"
                    />
                </div>
            </div>
        </div>
    );
};
