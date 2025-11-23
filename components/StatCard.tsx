import React from 'react';
import { Icons } from './Icons';

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
    className?: string;
    isLightBackground?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, className = "", isLightBackground = false }) => {
    const textColorClass = isLightBackground ? "text-gray-900" : "text-gray-900 dark:text-white";
    const arrowColorClass = isLightBackground ? "text-bw-bg-dark" : "text-bw-bg-dark dark:text-white";

    return (
        <div className={`rounded-2xl p-4 sm:p-6 flex flex-col justify-between w-full max-h-[112px] ${textColorClass} ${className}`}>
            <h3 className="mt-1 text-sm font-semibold font-inter">{title}</h3>
            <div className="flex hover:flex-row-reverse hover:justify-end flex-wrap mb-1 items-center gap-6">
                <div className="font-inter text-xl sm:text-[24px] font-semibold">{value}</div>
                <div className="text-xs font-medium flex font-inter items-center gap-1">
                    {change}
                    {trend === 'up' ? (
                        <Icons.ArrowUp className={`${arrowColorClass} w-4 h-4`} color="currentColor" />
                    ) : (
                        <Icons.ArrowDown className={`${arrowColorClass} w-4 h-4`} color="currentColor" />
                    )}
                </div>
            </div>
        </div>
    );
};
