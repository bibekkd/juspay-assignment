import React, { useState, useMemo } from 'react';
import { Icons } from './Icons';
import { Order } from '@/types';

// Expanded Mock Data for Pagination
const initialOrders: Order[] = [
    { id: '#CM9801', user: { name: 'Natali Craig', avatar: 'https://picsum.photos/30/30?random=12' }, project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
    { id: '#CM9802', user: { name: 'Kate Morrison', avatar: 'https://picsum.photos/30/30?random=13' }, project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
    { id: '#CM9803', user: { name: 'Drew Cano', avatar: 'https://picsum.photos/30/30?random=14' }, project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
    { id: '#CM9804', user: { name: 'Orlando Diggs', avatar: 'https://picsum.photos/30/30?random=15' }, project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
    { id: '#CM9805', user: { name: 'Andi Lane', avatar: 'https://picsum.photos/30/30?random=16' }, project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
    { id: '#CM9806', user: { name: 'Koray Okumus', avatar: 'https://picsum.photos/30/30?random=17' }, project: 'Website Redesign', address: 'Forest Hill Drive', date: 'Feb 5, 2023', status: 'In Progress' },
    { id: '#CM9807', user: { name: 'Candice Wu', avatar: 'https://picsum.photos/30/30?random=18' }, project: 'Mobile App', address: 'Highland View', date: 'Feb 8, 2023', status: 'Pending' },
    { id: '#CM9808', user: { name: 'Demi Wilkinson', avatar: 'https://picsum.photos/30/30?random=19' }, project: 'SaaS Platform', address: 'Sunny Side Up', date: 'Feb 10, 2023', status: 'Complete' },
    { id: '#CM9809', user: { name: 'Drew Cano', avatar: 'https://picsum.photos/30/30?random=14' }, project: 'Marketing Site', address: 'Bagwell Avenue Ocala', date: 'Feb 12, 2023', status: 'Approved' },
    { id: '#CM9810', user: { name: 'Natali Craig', avatar: 'https://picsum.photos/30/30?random=12' }, project: 'Dashboard UI', address: 'Meadow Lane Oakland', date: 'Feb 15, 2023', status: 'In Progress' },
    { id: '#CM9811', user: { name: 'Orlando Diggs', avatar: 'https://picsum.photos/30/30?random=15' }, project: 'Analytics Tool', address: 'Washburn Baton Rouge', date: 'Feb 20, 2023', status: 'Complete' },
    { id: '#CM9812', user: { name: 'Andi Lane', avatar: 'https://picsum.photos/30/30?random=16' }, project: 'E-commerce', address: 'Nest Lane Olivette', date: 'Mar 1, 2023', status: 'Rejected' },
    { id: '#CM9813', user: { name: 'Kate Morrison', avatar: 'https://picsum.photos/30/30?random=13' }, project: 'CRM Updates', address: 'Larry San Francisco', date: 'Mar 5, 2023', status: 'Pending' },
    { id: '#CM9814', user: { name: 'Koray Okumus', avatar: 'https://picsum.photos/30/30?random=17' }, project: 'Blog Platform', address: 'Forest Hill Drive', date: 'Mar 10, 2023', status: 'In Progress' },
    { id: '#CM9815', user: { name: 'Candice Wu', avatar: 'https://picsum.photos/30/30?random=18' }, project: 'API Integration', address: 'Highland View', date: 'Mar 15, 2023', status: 'Approved' },
];

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

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'In Progress': return 'text-blue-500';
            case 'Complete': return 'text-green-500';
            case 'Pending': return 'text-blue-300';
            case 'Approved': return 'text-yellow-500';
            case 'Rejected': return 'text-gray-400';
            default: return 'text-gray-500';
        }
    };

    const handleSort = (key: SortKey) => {
        let direction: SortDirection = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
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

    const renderSortIcon = (key: SortKey) => {
        if (sortConfig.key !== key) return <Icons.Sort size={14} className="ml-1 opacity-0 group-hover:opacity-50" />;
        return sortConfig.direction === 'asc' ? <Icons.ArrowUp size={14} className="ml-1" /> : <Icons.ArrowDown size={14} className="ml-1" />;
    };

    return (
        <div className="flex-1 p-6 h-full overflow-hidden flex flex-col">
            <h2 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white">Order List</h2>

            {/* Toolbar */}
            <div className="bg-bw-card-light dark:bg-bw-card-dark p-1 rounded-lg mt-2 mb-4 flex flex-col h-[44px] gap-2">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <button className="p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded transition-colors"><Icons.Plus size={18} className="text-gray-500 dark:text-white" /></button>
                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className={`p-2 rounded transition-colors ${showFilter ? 'bg-gray-200 dark:bg-white/20 text-gray-900 dark:text-white' : 'hover:bg-gray-200 dark:hover:bg-white/10 text-gray-500 dark:text-white'}`}
                        >
                            <Icons.Filter className='text-gray-500 dark:text-white'
                                color='currentColor'
                            />
                        </button>
                        <button
                            onClick={() => handleSort('date')}
                            className="p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded transition-colors"
                            title="Sort by Date"
                        >
                            <Icons.Sort size={18} className="text-gray-500 dark:text-white" />
                        </button>
                    </div>
                    <div className="relative w-full md:w-64">
                        <Icons.Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                            className="w-full pl-9 pr-4 py-1.5 bg-white dark:bg-black/20 border border-transparent focus:border-blue-500 rounded-lg text-sm text-gray-900 dark:text-white outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Filter Row */}
                <div className={`overflow-hidden transition-all duration-300 ${showFilter ? 'max-h-12 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500 dark:text-white">Status:</span>
                        {['All', 'In Progress', 'Complete', 'Pending', 'Approved', 'Rejected'].map((status) => (
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
            </div>

            {/* Table Container */}
            <div className="flex-1 bg-bw-card-light dark:bg-bw-card-dark rounded-xl overflow-hidden flex flex-col shadow-sm border border-gray-100 dark:border-white/5">
                <div className="overflow-x-auto flex-1 scrollbar-hide">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-400 uppercase bg-transparent border-b border-gray-200 dark:border-white/10">
                            <tr>
                                <th className="p-4 w-4">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                </th>
                                <th className="px-4 py-3 font-medium cursor-pointer group hover:text-gray-600 dark:hover:text-gray-300" onClick={() => handleSort('id')}>
                                    <div className="flex items-center">Order ID {renderSortIcon('id')}</div>
                                </th>
                                <th className="px-4 py-3 font-medium cursor-pointer group hover:text-gray-600 dark:hover:text-gray-300" onClick={() => handleSort('user.name')}>
                                    <div className="flex items-center">User {renderSortIcon('user.name')}</div>
                                </th>
                                <th className="px-4 py-3 font-medium cursor-pointer group hover:text-gray-600 dark:hover:text-gray-300" onClick={() => handleSort('project')}>
                                    <div className="flex items-center">Project {renderSortIcon('project')}</div>
                                </th>
                                <th className="px-4 py-3 font-medium cursor-pointer group hover:text-gray-600 dark:hover:text-gray-300" onClick={() => handleSort('address')}>
                                    <div className="flex items-center">Address {renderSortIcon('address')}</div>
                                </th>
                                <th className="px-4 py-3 font-medium cursor-pointer group hover:text-gray-600 dark:hover:text-gray-300" onClick={() => handleSort('date')}>
                                    <div className="flex items-center">Date {renderSortIcon('date')}</div>
                                </th>
                                <th className="px-4 py-3 font-medium cursor-pointer group hover:text-gray-600 dark:hover:text-gray-300" onClick={() => handleSort('status')}>
                                    <div className="flex items-center">Status {renderSortIcon('status')}</div>
                                </th>
                                <th className="px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                            {paginatedOrders.length > 0 ? paginatedOrders.map((order, index) => {
                                const isSelected = selected.has(order.id);
                                return (
                                    <tr key={`${order.id}-${index}`} className={`hover:bg-gray-100 dark:hover:bg-white/5 transition-colors ${isSelected ? 'bg-gray-50 dark:bg-white/5' : ''}`}>
                                        <td className="p-4">
                                            <div className="flex items-center cursor-pointer" onClick={() => toggleSelect(order.id)}>
                                                {isSelected
                                                    ? <Icons.Check className="text-blue-500" size={18} />
                                                    : <div className="w-[18px] h-[18px] border border-gray-300 rounded dark:border-gray-600 bg-white dark:bg-transparent"></div>
                                                }
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{order.id}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <img className="w-6 h-6 rounded-full" src={order.user.avatar} alt={order.user.name} />
                                                <span className="text-gray-900 dark:text-white">{order.user.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-gray-900 dark:text-white">{order.project}</td>
                                        <td className="px-4 py-3 text-gray-900 dark:text-white">{order.address}</td>
                                        <td className="px-4 py-3 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                            <Icons.Calendar size={14} />
                                            {order.date}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full ${getStatusColor(order.status).replace('text-', 'bg-')}`}></span>
                                                <span className={getStatusColor(order.status)}>{order.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <Icons.More size={16} className="cursor-pointer hover:text-gray-900 dark:hover:text-white" />
                                        </td>
                                    </tr>
                                )
                            }) : (
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
                <div className="p-4 border-t border-gray-200 dark:border-white/10 flex justify-end items-center gap-2 text-sm text-gray-500">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-1 hover:text-gray-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <Icons.ArrowDown className="rotate-90" size={16} />
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
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className="p-1 hover:text-gray-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <Icons.ArrowUp className="rotate-90" size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderListView;