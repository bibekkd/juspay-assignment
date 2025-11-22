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

export interface NotificationItem {
    id: string;
    type: 'bug' | 'user' | 'subscribe' | 'version';
    title: string;
    time: string;
    avatar?: string;
    initials?: string;
}

export interface Contact {
    name: string;
    avatar: string;
}
