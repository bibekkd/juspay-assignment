// Order Types
export interface Order {
    id: string;
    user: {
        name: string;
        avatar: string;
    };
    project: string;
    address: string;
    date: string;
    status: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected';
}

// Notification Types
export interface NotificationItem {
    id: string;
    type: 'bug' | 'user' | 'subscribe' | 'version';
    title: string;
    time: string;
    avatar?: string;
    initials?: string;
}

// Contact Types
export interface Contact {
    name: string;
    avatar: string;
}

// Dashboard Data Types
export interface ProjectionDataPoint {
    name: string;
    actual: number;
    projection: number;
}

export interface RevenueDataPoint {
    name: string;
    current: number;
    previous: number;
}

export interface LocationData {
    name: string;
    value: string;
    percentage: number;
    color: string;
}

export interface SalesDataPoint {
    name: string;
    value: number;
    colorVar: string;
    [key: string]: any;
}
