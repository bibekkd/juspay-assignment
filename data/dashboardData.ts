import { ProjectionDataPoint, RevenueDataPoint } from '@/types';


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
