import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, CartesianGrid } from 'recharts';
import { Icons } from '@/components/Icons';
import { StatCard } from './StatCard';
import { ProjectionsChart } from './ProjectionsChart';

// Mock Data
const projectionData = [
    { name: 'Jan', actual: 16, projection: 5 },
    { name: 'Feb', actual: 20, projection: 5 },
    { name: 'Mar', actual: 17, projection: 5 },
    { name: 'Apr', actual: 22, projection: 6 },
    { name: 'May', actual: 15, projection: 4 },
    { name: 'Jun', actual: 20, projection: 5 },
];

const revenueData = [
    { name: 'Jan', current: 10, previous: 8 },
    { name: 'Feb', current: 15, previous: 12 },
    { name: 'Mar', current: 12, previous: 14 },
    { name: 'Apr', current: 8, previous: 10 },
    { name: 'May', current: 14, previous: 12 },
    { name: 'Jun', current: 22, previous: 18 },
];

const salesData = [
    { name: 'Direct', value: 300.56, colorVar: 'var(--chart-donut-1)' },
    { name: 'Affiliate', value: 135.18, colorVar: 'var(--chart-donut-2)' },
    { name: 'Sponsored', value: 154.02, colorVar: 'var(--chart-donut-3)' },
    { name: 'E-mail', value: 48.96, colorVar: 'var(--chart-donut-4)' },
];

const DashboardView: React.FC = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="flex-1 p-6">Loading...</div>;
    }

    return (
        <div className="flex-1 p-6 space-y-6 overflow-y-auto h-full">
            <h2 className="text-sm text-ag-14 font-semibold mb-4 text-gray-900 dark:text-white">eCommerce</h2>

            {/* Grid for Top Section */}
            <div className="flex flex-col xl:flex-row gap-6">
                {/* Left Column Group */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Row 1 */}
                    <StatCard
                        title="Customers"
                        value="3,781"
                        change="+11.01%"
                        trend="up"
                        className="bg-bw-customer-light dark:bg-bw-customer-light"
                        isLightBackground={true}
                    />

                    <StatCard
                        title="Orders"
                        value="1,219"
                        change="-0.03%"
                        trend="down"
                        className="bg-bw-card-light dark:bg-bw-card-dark"
                    />

                    {/* Row 2 */}
                    <StatCard
                        title="Revenue"
                        value="$695"
                        change="+15.03%"
                        trend="up"
                        className="bg-bw-card-light dark:bg-bw-card-dark"
                    />

                    <StatCard
                        title="Growth"
                        value="30.1%"
                        change="+6.08%"
                        trend="up"
                        className="bg-bw-growth-light dark:bg-bw-growth-light"
                        isLightBackground={true}
                    />
                </div>

                {/* Right Column Group (Projections) */}
                <div className="flex-1 bg-bw-card-light dark:bg-bw-card-dark p-2 rounded-2xl h-[252px]">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white font-inter m-5">Projections vs Actuals</h3>
                    <div className="mx-5 h-[160px]">
                        <ProjectionsChart data={projectionData} />
                    </div>
                </div>
            </div>

            {/* Revenue and Location Row */}
            <div className="flex flex-col xl:flex-row gap-6">
                {/* Revenue Line Chart */}
                <div className="flex-[2] bg-bw-card-light dark:bg-bw-card-dark rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-6 border-l-2 border-black dark:border-white pl-4">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Revenue</h3>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
                            <span className="text-gray-900 dark:text-white">Current Week $58,211</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="w-2 h-2 rounded-full bg-blue-300"></span>
                            <span className="text-gray-500 dark:text-gray-400">Previous Week $68,768</span>
                        </div>
                    </div>
                    <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={revenueData}>
                                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="var(--chart-grid)" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: 'var(--card)', color: 'var(--foreground)' }} />
                                <Line type="monotone" dataKey="current" stroke="var(--chart-line-current)" strokeWidth={3} dot={false} />
                                <Line type="monotone" dataKey="previous" stroke="var(--chart-line-previous)" strokeWidth={3} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Location Map (Simplified) */}
                <div className="flex-1 bg-bw-card-light dark:bg-bw-card-dark rounded-2xl p-6">
                    <h3 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white">Revenue by Location</h3>
                    <div className="h-[100px] flex items-center justify-center mb-4 opacity-50">
                        <Icons.Globe size={64} className="text-gray-300 dark:text-gray-600" />
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between text-xs mb-1 text-gray-900 dark:text-white"><span>New York</span><span>72K</span></div>
                        <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full"><div className="h-full bg-black dark:bg-white w-3/4 rounded-full"></div></div>

                        <div className="flex justify-between text-xs mb-1 mt-2 text-gray-900 dark:text-white"><span>San Francisco</span><span>39K</span></div>
                        <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full"><div className="h-full bg-blue-300 w-1/2 rounded-full"></div></div>

                        <div className="flex justify-between text-xs mb-1 mt-2 text-gray-900 dark:text-white"><span>Sydney</span><span>25K</span></div>
                        <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full"><div className="h-full bg-purple-300 w-1/3 rounded-full"></div></div>

                        <div className="flex justify-between text-xs mb-1 mt-2 text-gray-900 dark:text-white"><span>Singapore</span><span>61K</span></div>
                        <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full"><div className="h-full bg-orange-200 w-2/3 rounded-full"></div></div>
                    </div>
                </div>
            </div>

            {/* Bottom Row: Table and Donut */}
            <div className="flex flex-col xl:flex-row gap-6">
                {/* Top Selling Products */}
                <div className="flex-[3] bg-bw-card-light dark:bg-bw-card-dark rounded-2xl p-6">
                    <h3 className="text-sm font-semibold mb-6 text-gray-900 dark:text-white">Top Selling Products</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700">
                                <tr>
                                    <th className="py-3 font-normal">Name</th>
                                    <th className="py-3 font-normal">Price</th>
                                    <th className="py-3 font-normal">Quantity</th>
                                    <th className="py-3 font-normal">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-4 font-medium text-gray-900 dark:text-white">ASOS Ridley High Waist</td>
                                    <td className="py-4">$79.49</td>
                                    <td className="py-4">82</td>
                                    <td className="py-4 font-medium text-gray-900 dark:text-white">$6,518.18</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-4 font-medium text-gray-900 dark:text-white">Marco Lightweight Shirt</td>
                                    <td className="py-4">$128.50</td>
                                    <td className="py-4">37</td>
                                    <td className="py-4 font-medium text-gray-900 dark:text-white">$4,754.50</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-4 font-medium text-gray-900 dark:text-white">Half Sleeve Shirt</td>
                                    <td className="py-4">$39.99</td>
                                    <td className="py-4">64</td>
                                    <td className="py-4 font-medium text-gray-900 dark:text-white">$2,559.36</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-4 font-medium text-gray-900 dark:text-white">Lightweight Jacket</td>
                                    <td className="py-4">$20.00</td>
                                    <td className="py-4">184</td>
                                    <td className="py-4 font-medium text-gray-900 dark:text-white">$3,680.00</td>
                                </tr>
                                <tr>
                                    <td className="py-4 font-medium text-gray-900 dark:text-white">Marco Shoes</td>
                                    <td className="py-4">$79.49</td>
                                    <td className="py-4">64</td>
                                    <td className="py-4 font-medium text-gray-900 dark:text-white">$1,965.81</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Total Sales Donut */}
                <div className="flex-1 bg-bw-card-light dark:bg-bw-card-dark rounded-2xl p-6 flex flex-col">
                    <h3 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white">Total Sales</h3>
                    <div className="flex-1 relative min-h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={salesData}
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {salesData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.colorVar} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-xs text-white bg-black dark:bg-white dark:text-black px-2 py-1 rounded-full transform translate-x-[-20px] translate-y-[20px] shadow-lg">38.6%</div>
                        </div>
                    </div>
                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400"><span className="w-2 h-2 rounded-full bg-[#1C1C1C] dark:bg-[#C6C7F8]"></span>Direct</span>
                            <span className="font-medium text-gray-900 dark:text-white">$300.56</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400"><span className="w-2 h-2 rounded-full bg-[#BAEDBD]"></span>Affiliate</span>
                            <span className="font-medium text-gray-900 dark:text-white">$135.18</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400"><span className="w-2 h-2 rounded-full bg-[#95A4FC]"></span>Sponsored</span>
                            <span className="font-medium text-gray-900 dark:text-white">$154.02</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400"><span className="w-2 h-2 rounded-full bg-[#B1E3FF]"></span>E-mail</span>
                            <span className="font-medium text-gray-900 dark:text-white">$48.96</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardView;