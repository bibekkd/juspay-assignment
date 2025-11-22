import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface ProjectionsChartProps {
    data: any[];
}

export const ProjectionsChart: React.FC<ProjectionsChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={20} margin={{ top: 8, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="0" stroke="#FFFFFF10" />
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
                    domain={[0, 30]}
                    ticks={[0, 10, 20, 30]}
                />
                <Tooltip
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: 'var(--card)', color: 'var(--foreground)' }}
                />
                <Bar dataKey="actual" stackId="a" fill="#A8C5DA" radius={[0, 0, 0, 0]} />
                <Bar dataKey="projection" stackId="a" fill="#A8C5DA66" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
};
