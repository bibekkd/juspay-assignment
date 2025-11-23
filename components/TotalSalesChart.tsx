import React from 'react';
import { SalesPieChart } from './SalesPieChart';
import { salesData } from '@/data';



export const TotalSalesChart: React.FC = () => {

    return (
        <div className="flex-1 bg-bw-card-light dark:bg-bw-card-dark rounded-2xl p-6 flex flex-col h-auto xl:h-[370px]">
            <h3 className="text-sm font-semibold mb-3 mt-1 text-gray-900 dark:text-white ml-2">Total Sales</h3>
            <div className="relative h-[250px] w-full xl:h-auto xl:flex-1 min-h-[160px]">
                <SalesPieChart data={salesData} />
            </div>
            <div className="flex flex-col space-y-4 mx-2 mt-4">
                <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-bw-bg-dark dark:bg-[#C6C7F8]"></span>
                        Direct
                    </div>
                    <div className="font-regular text-gray-900 dark:text-white">$300.56</div>
                </div>
                <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BAEDBD]"></span>
                        Affiliate
                    </div>
                    <div className="font-regular text-gray-900 dark:text-white">$135.18</div>
                </div>
                <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#95A4FC]"></span>
                        Sponsored
                    </div>
                    <div className="font-regular text-gray-900 dark:text-white">$154.02</div>
                </div>
                <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B1E3FF]"></span>
                        E-mail
                    </div>
                    <div className="font-regular text-gray-900 dark:text-white">$48.96</div>
                </div>
            </div>
        </div>
    );
};
