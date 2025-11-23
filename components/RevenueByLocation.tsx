import React from 'react';
import { WorldMap } from './WorldMap';
import { locationData } from '@/data';



export const RevenueByLocation: React.FC = () => {
    return (
        <div className="flex-1 bg-bw-card-light dark:bg-bw-card-dark rounded-2xl p-6">
            <h3 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white ml-2">Revenue by Location</h3>
            <div className="h-[82px] mb-4 w-[154px]">
                <WorldMap />
            </div>
            <div className="space-y-3 mx-2">
                {locationData.map((location, index) => (
                    <div key={index}>
                        <div className="flex justify-between text-xs mb-0.5 text-gray-900 dark:text-white">
                            <span>{location.name}</span>
                            <span>{location.value}</span>
                        </div>
                        <div className="h-0.5 w-full bg-gray-200 dark:bg-bw-sky-light-44 rounded-full">
                            <div
                                className="h-full rounded-full"
                                style={{ width: `${location.percentage}%`, backgroundColor: location.color }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
