import React from 'react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';
import { RevenueDataPoint } from '@/types';
import { useDarkMode } from '@/hooks/useDarkMode';

interface RevenueChartProps {
    data: RevenueDataPoint[];
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
    const isDark = useDarkMode();

    const gridColor = isDark ? '#FFFFFF1A' : '#1C1C1C0D';
    const axisColor = isDark ? '#FFFFFF66' : '#1C1C1C66';
    const lineColor = isDark ? '#C6C7F8' : '#1C1C1C';

    // Split the 'previous' line into solid and dashed segments
    // We'll make the last few points dashed to simulate a projection/future state
    const splitIndex = Math.max(0, data.length - 3);

    const chartData = data.map((item, index) => ({
        ...item,
        // Solid line goes up to the split point
        previousSolid: index <= splitIndex ? item.previous : null,
        // Dashed line starts from the split point (overlap ensures continuity)
        previousDashed: index >= splitIndex ? item.previous : null,
    }));


    return (
        <div className="flex-[4] bg-bw-card-light dark:bg-bw-card-dark rounded-2xl p-6 relative overflow-hidden">
            {/* Gradient Overlays for Peaks */}
            {/* Peak 1 (Feb/Mar) - Cyan Glow between lines */}
            <div
                className={`hidden md:block absolute ${isDark ? 'top-[46%] left-[12%] w-[300px] h-[15px] pointer-events-none blur-xl' : 'top-[42%] left-[12%] w-[250px] h-[25px] pointer-events-none blur-lg'}`}
                style={{
                    background: 'radial-gradient(circle, rgba(168, 197, 218, 0.6) 0%, rgba(168, 197, 218, 0) 65%)',
                    zIndex: 0
                }}
            />
            {/* Peak 2 (Jun) - Purple Glow (dark) / Gray Glow (light) between lines */}
            <div
                className={`hidden md:block absolute ${isDark ?
                    'top-[41%] left-[53%] w-[300px] h-[15px] pointer-events-none blur-xl' :
                    'top-[40%] left-[53%] w-[300px] h-[20px] pointer-events-none blur-md'}`}
                style={{
                    background: isDark
                        ? 'radial-gradient(circle, rgba(198, 199, 248, 0.6) 0%, rgba(198, 199, 248, 0) 65%)'
                        : 'radial-gradient(circle, rgba(28, 28, 28, 0.2) 0%, rgba(28, 28, 28, 0) 65%)',
                    zIndex: 0
                }}
            />

            <div className="flex items-center gap-8 mb-6 pl-4 relative z-10">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white border-r border-bw-text-tertiary dark:border-bw-border-dark pr-4">Revenue</h3>
                <div className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#A8C5DA]"></span>
                    <span className="text-bw-text-dark dark:text-white">Current Week $58,211</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                    <span className={`w-2 h-2 rounded-full ${isDark ? "bg-[#C6C7F8]" : "bg-[#1C1C1C]"}`}></span>
                    <span className="text-bw-text-dark dark:text-white">Previous Week $68,768</span>
                </div>
            </div>
            <div className="h-[200px] relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid
                            vertical={false}
                            strokeDasharray="0"
                            stroke={gridColor}
                            strokeWidth={1}
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: axisColor, fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: axisColor, fontSize: 12 }}
                            tickFormatter={(value) => `${value}M`}
                        />
                        <Tooltip
                            contentStyle={{
                                borderRadius: '8px',
                                border: 'none',
                                backgroundColor: 'var(--card)',
                                color: 'var(--foreground)',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                        />

                        {/* Current Line - Cyan Solid (#A8C5DA) */}
                        <Line
                            type="monotone"
                            dataKey="current"
                            stroke="#A8C5DA"
                            strokeWidth={3}
                            dot={false}
                        />

                        {/* Previous Line - Purple Solid Part (#C6C7F8) */}
                        <Line
                            type="monotone"
                            dataKey="previousSolid"
                            stroke={lineColor}
                            strokeWidth={3}
                            dot={false}
                        />

                        {/* Previous Line - Purple Dashed Part (#C6C7F8) */}
                        <Line
                            type="monotone"
                            dataKey="previousDashed"
                            stroke={lineColor}
                            strokeWidth={3}
                            strokeDasharray="5 5"
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
