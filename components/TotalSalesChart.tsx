import React from 'react';
import { SalesPieChart } from './SalesPieChart';
import { salesData } from '@/data';



export const TotalSalesChart: React.FC = () => {


    return (
        <div className="flex-1 bg-bw-card-light dark:bg-bw-card-dark rounded-2xl p-6 flex flex-col">
            <h3 className="text-sm font-semibold mb-3 mt-1 text-gray-900 dark:text-white ml-2">Total Sales</h3>
            <div className="flex-1 relative min-h-[160px]">
                <SalesPieChart data={salesData} />
            </div>
            <div className="flex flex-row justify-between mx-2">
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-row text-xs">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-white"><span className="w-1.5 h-1.5 rounded-full bg-bw-bg-dark dark:bg-[#C6C7F8]"></span>Direct</div>
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
