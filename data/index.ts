import { ProjectionDataPoint, RevenueDataPoint, LocationData, SalesDataPoint } from '@/types';


export const projectionData: ProjectionDataPoint[] = [
    { name: 'Jan', actual: 16, projection: 5 },
    { name: 'Feb', actual: 20, projection: 5 },
    { name: 'Mar', actual: 17, projection: 5 },
    { name: 'Apr', actual: 22, projection: 6 },
    { name: 'May', actual: 15, projection: 4 },
    { name: 'Jun', actual: 20, projection: 5 },
];

export const revenueData: RevenueDataPoint[] = [
    { name: 'Jan', current: 9, previous: 12 },
    { name: 'Feb', current: 17, previous: 9 },
    { name: 'Mar', current: 16, previous: 10 },
    { name: 'Apr', current: 10, previous: 16 },
    { name: 'May', current: 12, previous: 19 },
    { name: 'Jun', current: 22, previous: 18 },
];

export const locationData: LocationData[] = [
    { name: 'New York', value: '72K', percentage: 75, color: '#A8C5DA' },
    { name: 'San Francisco', value: '39K', percentage: 50, color: '#A8C5DA' },
    { name: 'Sydney', value: '25K', percentage: 33, color: '#A8C5DA' },
    { name: 'Singapore', value: '61K', percentage: 67, color: '#A8C5DA' },
];

export const salesData: SalesDataPoint[] = [
    { name: 'Direct', value: 300.56, colorVar: 'var(--chart-donut-1)' },
    { name: 'Affiliate', value: 135.18, colorVar: 'var(--chart-donut-2)' },
    { name: 'Sponsored', value: 154.02, colorVar: 'var(--chart-donut-3)' },
    { name: 'E-mail', value: 48.96, colorVar: 'var(--chart-donut-4)' },
];
