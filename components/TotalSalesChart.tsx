import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
    { name: 'Direct', value: 300.56, colorVar: 'var(--chart-donut-1)' },
    { name: 'Affiliate', value: 135.18, colorVar: 'var(--chart-donut-2)' },
    { name: 'Sponsored', value: 154.02, colorVar: 'var(--chart-donut-3)' },
    { name: 'E-mail', value: 48.96, colorVar: 'var(--chart-donut-4)' },
];

export const TotalSalesChart: React.FC = () => {
    const totalSales = salesData.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <div className="flex-1 bg-bw-card-light dark:bg-bw-card-dark rounded-2xl p-6 flex flex-col">
            <h3 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white">Total Sales</h3>
            <div className="flex-1 relative min-h-[160px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={salesData}
                            innerRadius={40}
                            outerRadius={60}
                            paddingAngle={5}
                            cornerRadius={8}
                            dataKey="value"
                            stroke="none"
                            startAngle={-230}
                            endAngle={-670}
                        >
                            {salesData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.colorVar}
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    const value = payload[0].value as number;
                                    const percentage = ((value / totalSales) * 100).toFixed(1);
                                    return (
                                        <div className="text-lg font-medium text-white bg-bw-tooltip-bg backdrop-blur-[40px] px-3 py-1 rounded-xl shadow-lg border-none outline-none">
                                            {percentage}%
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-row text-xs">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-white"><span className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C] dark:bg-[#C6C7F8]"></span>Direct</div>
                    </div>
                    <div className="flex flex-row text-xs">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-white"><span className="w-1.5 h-1.5 rounded-full bg-[#BAEDBD]"></span>Affiliate</div>
                    </div>
                    <div className="flex flex-row text-xs">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-white"><span className="w-1.5 h-1.5 rounded-full bg-[#95A4FC]"></span>Sponsored</div>
                    </div>
                    <div className="flex flex-row text-xs">
                        <span className="flex items-center gap-2 text-gray-500 dark:text-white"><span className="w-1.5 h-1.5 rounded-full bg-[#B1E3FF]"></span>E-mail</span>
                    </div>
                </div>
                <div className="font-regular text-gray-900 dark:text-white text-right text-xs space-y-4">
                    <div>$300.56</div>
                    <div>$135.18</div>
                    <div>$154.02</div>
                    <div>$48.96</div>
                </div>
            </div>
        </div>
    );
};
