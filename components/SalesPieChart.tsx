import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { SalesDataPoint } from '@/types';

interface SalesPieChartProps {
    data: SalesDataPoint[];
}

export const SalesPieChart: React.FC<SalesPieChartProps> = ({ data }) => {
    const totalSales = data.reduce((acc, curr) => acc + curr.value, 0);
    const [isLargeDevice, setIsLargeDevice] = React.useState(true);

    React.useEffect(() => {
        const handleResize = () => {
            setIsLargeDevice(window.innerWidth >= 1280);
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const innerRadius = isLargeDevice ? 40 : 60;
    const outerRadius = isLargeDevice ? 60 : 80;

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={data}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    paddingAngle={5}
                    cornerRadius={8}
                    dataKey="value"
                    stroke="none"
                    startAngle={-230}
                    endAngle={-670}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.colorVar} />
                    ))}
                </Pie>
                <Tooltip
                    content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                            const value = payload[0].value as number;
                            const percentage = ((value / totalSales) * 100).toFixed(1);
                            return (
                                <div className="text-lg font-medium text-white bg-bw-tooltip-bg backdrop-blur-[40px] px-3 py-1 rounded-xl shadow-lg border-none outline-none">
                                    {percentage}%
                                </div>
                            );
                        }
                        return null;
                    }}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};
