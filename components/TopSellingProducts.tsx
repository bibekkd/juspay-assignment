import React from 'react';

interface Product {
    name: string;
    price: string;
    quantity: number;
    amount: string;
}

const products: Product[] = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
];

export const TopSellingProducts: React.FC = () => {
    return (
        <div className="flex-[4] h-[336px] bg-bw-card-light dark:bg-bw-card-dark rounded-2xl p-6">
            <h3 className="text-sm font-semibold mb-3 text-gray-900 font-ag-14 dark:text-white">Top Selling Products</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-white">
                    <thead className="text-xs text-bw-text-dark border-b border-gray-200 dark:border-bw-text-light-dark">
                        <tr>
                            <th className="py-3 font-normal">Name</th>
                            <th className="py-3 font-normal">Price</th>
                            <th className="py-3 font-normal">Quantity</th>
                            <th className="py-3 font-normal">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className={index !== products.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""}>
                                <td className={`py-2 font-normal text-xs text-gray-900 dark:text-white ${index === 0 ? 'pt-4 pb-2' : ''}`}>{product.name}</td>
                                <td className="py-2 text-xs">{product.price}</td>
                                <td className="py-2 text-xs">{product.quantity}</td>
                                <td className="py-2 font-normal text-xs text-gray-900 dark:text-white">{product.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
