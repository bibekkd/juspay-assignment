import React from 'react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';
import { RevenueDataPoint } from '@/types';

interface RevenueChartProps {
    data: RevenueDataPoint[];
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
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
                className="absolute top-[40%] left-[25%] w-[80px] h-[60px] pointer-events-none blur-2xl"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 197, 218, 0.6) 0%, rgba(168, 197, 218, 0) 65%)',
                    zIndex: 0
                }}
            />
            {/* Peak 2 (Jun) - Purple Glow between lines */}
            <div
                className="absolute top-[38%] left-[68%] w-[80px] h-[60px] pointer-events-none blur-2xl"
                style={{
                    background: 'radial-gradient(circle, rgba(198, 199, 248, 0.6) 0%, rgba(198, 199, 248, 0) 65%)',
                    zIndex: 0
                }}
            />

            <div className="flex items-center gap-8 mb-6 pl-4 relative z-10">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white border-r border-bw-border-dark pr-4">Revenue</h3>
                <div className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#A8C5DA]"></span>
                    <span className="text-gray-900 dark:text-white">Current Week $58,211</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#C6C7F8]"></span>
                    <span className="text-gray-500 dark:text-gray-400">Previous Week $68,768</span>
                </div>
            </div>
            <div className="h-[200px] relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid
                            vertical={false}
                            strokeDasharray="0"
                            stroke="#FFFFFF1A"
                            strokeWidth={1}
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#FFFFFF66', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#FFFFFF66', fontSize: 12 }}
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
                            stroke="#C6C7F8"
                            strokeWidth={3}
                            dot={false}
                        />

                        {/* Previous Line - Purple Dashed Part (#C6C7F8) */}
                        <Line
                            type="monotone"
                            dataKey="previousDashed"
                            stroke="#C6C7F8"
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
