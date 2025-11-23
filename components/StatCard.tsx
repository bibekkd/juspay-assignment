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
        <div className={`rounded-2xl p-6 flex flex-col justify-between h-[112px] ${textColorClass} ${className}`}>
            <h3 className="mt-1 text-sm font-semibold font-inter">{title}</h3>
            <div className="flex mb-1 items-center gap-8">
                <span className="font-inter text-[24px] font-semibold">{value}</span>
                <span className="text-xs font-medium flex font-inter items-center gap-1">
                    {change}
                    {trend === 'up' ? (
                        <Icons.ArrowUp className={`${arrowColorClass} w-4 h-4`} color="currentColor" />
                    ) : (
                        <Icons.ArrowDown className={`${arrowColorClass} w-4 h-4`} color="currentColor" />
                    )}
                </span>
            </div>
        </div>
    );
};
