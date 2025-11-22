import React from 'react';
import { NotificationItem, Contact } from '@/types';
import { Icons } from '@/components/Icons';

const notifications: NotificationItem[] = [
    { id: '1', type: 'bug', title: 'You have a bug that needs...', time: 'Just now', initials: 'Bug' },
    { id: '2', type: 'user', title: 'New user registered', time: '59 minutes ago', initials: 'U' },
    { id: '3', type: 'bug', title: 'You have a bug that needs...', time: '12 hours ago', initials: 'Bug' },
    { id: '4', type: 'subscribe', title: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM', initials: 'AL' },
];

const activities: NotificationItem[] = [
    { id: '5', type: 'bug', title: 'You have a bug that needs...', time: 'Just now', avatar: 'https://picsum.photos/30/30?random=1' },
    { id: '6', type: 'version', title: 'Released a new version', time: '59 minutes ago', avatar: 'https://picsum.photos/30/30?random=2' },
    { id: '7', type: 'bug', title: 'Submitted a bug', time: '12 hours ago', avatar: 'https://picsum.photos/30/30?random=3' },
    { id: '8', type: 'bug', title: 'Modified A data in Page X', time: 'Today, 11:59 AM', avatar: 'https://picsum.photos/30/30?random=4' },
    { id: '9', type: 'bug', title: 'Deleted a page in Project X', time: 'Feb 2, 2023', avatar: 'https://picsum.photos/30/30?random=5' },
];

const contacts: Contact[] = [
    { name: 'Natali Craig', avatar: 'https://picsum.photos/30/30?random=6' },
    { name: 'Drew Cano', avatar: 'https://picsum.photos/30/30?random=7' },
    { name: 'Orlando Diggs', avatar: 'https://picsum.photos/30/30?random=8' },
    { name: 'Andi Lane', avatar: 'https://picsum.photos/30/30?random=9' },
    { name: 'Kate Morrison', avatar: 'https://picsum.photos/30/30?random=10' },
    { name: 'Koray Okumus', avatar: 'https://picsum.photos/30/30?random=11' },
];

const RightSidebar: React.FC = () => {
    return (
        <aside className="w-72 h-screen border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-bw-sidebar-dark overflow-y-auto hidden xl:block p-4 flex-shrink-0">
            {/* Notifications */}
            <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Notifications</h3>
                <div className="space-y-4">
                    {notifications.map((item) => (
                        <div key={item.id} className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 flex items-center justify-center text-xs font-bold shrink-0">
                                {item.type === 'bug' ? <Icons.Bug /> :
                                    item.type === 'user' ? <Icons.Person /> :
                                        <Icons.Wave />
                                }
                            </div>
                            <div>
                                <p className="text-sm text-gray-900 dark:text-white line-clamp-1 text-ag-14">{item.title}</p>
                                <p className="text-xs text-gray-400">{item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Activities */}
            <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Activities</h3>
                <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 space-y-6">
                    {activities.map((item) => (
                        <div key={item.id} className="pl-6 relative">
                            <div className="absolute -left-[13px] top-0 bg-white dark:bg-bw-sidebar-dark p-0.5">
                                <img src={item.avatar} className="w-6 h-6 rounded-full" alt="Avatar" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-900 dark:text-white line-clamp-1 text-ag-14">{item.title}</p>
                                <p className="text-xs text-gray-400">{item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contacts */}
            <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Contacts</h3>
                <div className="space-y-3">
                    {contacts.map((contact, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <img src={contact.avatar} alt={contact.name} className="w-6 h-6 rounded-full" />
                            <span className="text-sm text-gray-900 dark:text-white text-ag-14">{contact.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default RightSidebar;