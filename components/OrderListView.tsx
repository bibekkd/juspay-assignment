import React, { useState, useMemo } from 'react';
import { Order } from '@/types';
import { initialOrders } from '@/data/orders';
import { OrderToolbar } from './OrderToolbar';
import { OrderFilter } from './OrderFilter';
import { OrderTableRow } from './OrderTableRow';
import { OrderPagination } from './OrderPagination';

type SortKey = keyof Order | 'user.name';
type SortDirection = 'asc' | 'desc';

const OrderListView: React.FC = () => {
    const [selected, setSelected] = useState<Set<string>>(new Set(['#CM9804']));
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('All');
    const [showFilter, setShowFilter] = useState(false);
    const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: SortDirection }>({ key: 'id', direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const toggleSelect = (id: string) => {
        const newSelected = new Set(selected);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelected(newSelected);
    };

    const handleSort = () => {
        setSortConfig(prev => ({
            key: 'date',
            direction: prev.key === 'date' && prev.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    // Filter, Sort, and Search Logic
    const filteredOrders = useMemo(() => {
        let data = [...initialOrders];

        // Search
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            data = data.filter(order =>
                order.id.toLowerCase().includes(lowerTerm) ||
                order.user.name.toLowerCase().includes(lowerTerm) ||
                order.project.toLowerCase().includes(lowerTerm) ||
                order.address.toLowerCase().includes(lowerTerm)
            );
        }

        // Filter
        if (statusFilter !== 'All') {
            data = data.filter(order => order.status === statusFilter);
        }

        // Sort
        data.sort((a, b) => {
            let aValue: string | number = '';
            let bValue: string | number = '';

            if (sortConfig.key === 'user.name') {
                aValue = a.user.name;
                bValue = b.user.name;
            } else {
                aValue = a[sortConfig.key as keyof Order] as string;
                bValue = b[sortConfig.key as keyof Order] as string;
            }

            if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });

        return data;
    }, [searchTerm, statusFilter, sortConfig]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
    const paginatedOrders = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="flex-1 p-6 h-full overflow-hidden flex flex-col">
            <h2 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white">Order List</h2>

            {/* Toolbar */}
            <OrderToolbar
                showFilter={showFilter}
                setShowFilter={setShowFilter}
                handleSort={handleSort}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setCurrentPage={setCurrentPage}
            />

            {/* Filter Row */}
            <OrderFilter
                showFilter={showFilter}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                setCurrentPage={setCurrentPage}
            />

            {/* Table Container */}
            <div className="flex-1 dark:bg-transparent overflow-hidden flex flex-col">
                <div className="overflow-x-auto flex-1 scrollbar-hide">
                    <table className="w-full text-sm text-left text-bw-text-secondary dark:text-bw-text-dark-66">
                        <thead className="text-xs text-bw-text-secondary dark:text-bw-text-dark-66 bg-transparent border-b border-gray-200 dark:border-bw-text-dark-66">
                            <tr>
                                <th className="p-4 w-4">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="w-4 h-4 rounded appearance-none border border-bw-text-tertiary dark:border-bw-text-dark-33 bg-transparent checked:bg-bw-bg-dark checked:border-transparent checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlsaW5lIHBvaW50cz0iMjAgNiA5IDE3IDQgMTIiPjwvcG9seWxpbmU+PC9zdmc+')] dark:checked:bg-bw-purple dark:checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUMxQzFDIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlsaW5lIHBvaW50cz0iMjAgNiA5IDE3IDQgMTIiPjwvcG9seWxpbmU+PC9zdmc+')] checked:bg-center checked:bg-no-repeat checked:bg-[length:12px_12px]" />
                                    </div>
                                </th>
                                <th className="px-4 py-3 font-normal cursor-pointer group hover:text-bw-bg-dark dark:hover:text-gray-300">
                                    <div className="flex items-center">Order ID</div>
                                </th>
                                <th className="px-4 py-3 font-normal cursor-pointer group hover:text-bw-bg-dark dark:hover:text-gray-300">
                                    <div className="flex items-center">User</div>
                                </th>
                                <th className="px-4 py-3 font-normal cursor-pointer group hover:text-bw-bg-dark dark:hover:text-gray-300">
                                    <div className="flex items-center">Project</div>
                                </th>
                                <th className="px-4 py-3 font-normal cursor-pointer group hover:text-bw-bg-dark dark:hover:text-gray-300">
                                    <div className="flex items-center">Address</div>
                                </th>
                                <th className="px-4 py-3 font-medium cursor-pointer group hover:text-bw-bg-dark dark:hover:text-gray-300">
                                    <div className="flex items-center">Date</div>
                                </th>
                                <th className="px-4 py-3 font-medium cursor-pointer group hover:text-bw-bg-dark dark:hover:text-gray-300">
                                    <div className="flex items-center">Status</div>
                                </th>
                                <th className="px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedOrders.length > 0 ? paginatedOrders.map((order, index) => (
                                <OrderTableRow
                                    key={`${order.id}-${index}`}
                                    order={order}
                                    isSelected={selected.has(order.id)}
                                    toggleSelect={toggleSelect}
                                />
                            )) : (
                                <tr>
                                    <td colSpan={8} className="text-center py-12 text-gray-500 dark:text-gray-400">
                                        No orders found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <OrderPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default OrderListView;