import React, { useState, useEffect } from 'react';
import { Icons } from '@/components/Icons';
import { StatCard } from './StatCard';
import { ProjectionsChart } from './ProjectionsChart';
import { TopSellingProducts } from './TopSellingProducts';
import { TotalSalesChart } from './TotalSalesChart';
import { RevenueByLocation } from './RevenueByLocation';
import { RevenueChart } from './RevenueChart';
import { projectionData, revenueData } from '@/data/dashboardData';



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
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white font-inter mx-4.5 my-5">Projections vs Actuals</h3>
                    <div className="mx-3 h-[160px]">
                        <ProjectionsChart data={projectionData} />
                    </div>
                </div>
            </div>

            {/* Revenue and Location Row */}
            <div className="flex flex-col xl:flex-row gap-6">
                {/* Revenue Line Chart */}
                <RevenueChart data={revenueData} />

                {/* Revenue by Location */}
                <RevenueByLocation />
            </div>

            {/* Bottom Row: Table and Donut */}
            <div className="flex flex-col xl:flex-row gap-6">
                {/* Top Selling Products */}
                <TopSellingProducts />

                {/* Total Sales Donut */}
                <TotalSalesChart />
            </div>
        </div>
    );
};

export default DashboardView;