import React from 'react';
import { Order } from '@/types';
import { Icons } from './Icons';
import { Clipboard as ClipboardIcon } from 'lucide-react';
import { useStatusColor } from '@/hooks/useStatusColor';

interface OrderTableRowProps {
    order: Order;
    isSelected: boolean;
    toggleSelect: (id: string) => void;
}

export const OrderTableRow: React.FC<OrderTableRowProps> = ({ order, isSelected, toggleSelect }) => {
    const statusColor = useStatusColor(order.status);

    return (
        <tr className={`group border-t border-gray-200 dark:border-bw-text-dark-33 first:border-t-0 hover:border-t-transparent [&:hover+tr]:border-t-transparent hover:bg-gray-100 dark:hover:bg-white/5 transition-colors ${isSelected ? 'bg-gray-50 dark:bg-white/5' : ''}`}>
            <td className="p-4">
                <div className="flex items-center cursor-pointer" onClick={() => toggleSelect(order.id)}>
                    <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => { }}
                        className={`w-4 h-4 rounded appearance-none border border-bw-text-tertiary dark:border-bw-text-dark-33 bg-transparent checked:bg-bw-bg-dark checked:border-transparent checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlsaW5lIHBvaW50cz0iMjAgNiA5IDE3IDQgMTIiPjwvcG9seWxpbmU+PC9zdmc+')] dark:checked:bg-bw-purple dark:checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUMxQzFDIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlsaW5lIHBvaW50cz0iMjAgNiA5IDE3IDQgMTIiPjwvcG9seWxpbmU+PC9zdmc+')] checked:bg-center checked:bg-no-repeat checked:bg-[length:12px_12px]
                        transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    />
                </div>
            </td>
            <td className="px-4 py-3 font-normal text-gray-900 dark:text-white">{order.id}</td>
            <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                    <img className="w-6 h-6 rounded-full" src={order.user.avatar} alt={order.user.name} />
                    <span className="text-gray-900 dark:text-white">{order.user.name}</span>
                </div>
            </td>
            <td className="px-4 py-3 text-gray-900 dark:text-white">{order.project}</td>
            <td className="px-4 py-3 text-gray-900 dark:text-white group/address">
                <div className="flex items-center gap-2">
                    <span>{order.address}</span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(order.address);
                        }}
                        className="opacity-0 group-hover/address:opacity-100 transition-opacity text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                    >
                        <ClipboardIcon size={14} />
                    </button>
                </div>
            </td>
            <td className="px-4 py-3 flex items-center gap-2 text-bw-bg-dark dark:text-white">
                <Icons.Calendar size={16} />
                {order.date}
            </td>
            <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${statusColor.dot}`}></span>
                    <span className={statusColor.text}>{order.status}</span>
                </div>
            </td>
            <td className="px-4 py-3 text-right">
                <Icons.More size={16} className={`cursor-pointer hover:text-bw-bg-dark dark:hover:text-white transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
            </td>
        </tr>
    );
};
