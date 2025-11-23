import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface ProjectionsChartProps {
    data: any[];
}

export const ProjectionsChart: React.FC<ProjectionsChartProps> = ({ data }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check initial dark mode state
        setIsDark(document.documentElement.classList.contains('dark'));

        // Watch for dark mode changes
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    const gridColor = isDark ? '#FFFFFF1A' : '#1C1C1C0D';
    const axisColor = isDark ? '#FFFFFF66' : '#1C1C1C66';

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={20} margin={{ top: 8, right: 10, left: -20, bottom: 0 }}>
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
