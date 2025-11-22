import React from 'react';
import { Icons } from '@/components/Icons';
import { WorldMap } from './WorldMap';

interface LocationData {
    name: string;
    value: string;
    percentage: number;
    color: string;
}

const locationData: LocationData[] = [
    { name: 'New York', value: '72K', percentage: 75, color: 'bg-black dark:bg-bw-sky-light' },
    { name: 'San Francisco', value: '39K', percentage: 50, color: 'bg-blue-300' },
    { name: 'Sydney', value: '25K', percentage: 33, color: 'bg-purple-300' },
    { name: 'Singapore', value: '61K', percentage: 67, color: 'bg-orange-200' },
];

export const RevenueByLocation: React.FC = () => {
    return (
        <div className="flex-1 bg-bw-card-light dark:bg-bw-card-dark rounded-2xl p-6">
            <h3 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">Revenue by Location</h3>
            <div className="h-[82px] mb-4 w-[154px]">
                <WorldMap />
            </div>
            <div className="space-y-3">
                {locationData.map((location, index) => (
                    <div key={index}>
                        <div className="flex justify-between text-xs mb-0.5 text-gray-900 dark:text-white">
                            <span>{location.name}</span>
                            <span>{location.value}</span>
                        </div>
                        <div className="h-0.5 w-full bg-gray-200 dark:bg-bw-sky-light-44 rounded-full">
                            <div
                                className={`h-full ${location.color} rounded-full`}
                                style={{ width: `${location.percentage}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
