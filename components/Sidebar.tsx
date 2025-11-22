import React, { useState } from 'react';
import { DashboardIcons, Icons } from './Icons';

interface SidebarProps {
    activeView: string;
    onChangeView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onChangeView }) => {
    const [selectedTab, setSelectedTab] = useState<'favorites' | 'recently'>('favorites');
    const [userProfileOpen, setUserProfileOpen] = useState(true);
    const [eCommerceOpen, setECommerceOpen] = useState(false);

    const navItemClass = (viewName: string) => `
    flex items-center gap-2 px-3 py-1.5 rounded-sm cursor-pointer text-ag-14 transition-colors mb-1 relative
    ${activeView === viewName
            ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-1 before:bg-bw-border-selected before:rounded-r-sm'
            : 'text-gray-500 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5'}
  `;

    return (
        <aside className="w-64 h-screen flex flex-col border-r border-[#FFFFFF1A] dark:border-gray-800 bg-white dark:bg-bw-sidebar-dark transition-colors duration-300 flex-shrink-0">
            {/* User / Brand Area */}
            <div className="p-4 flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <img src="https://picsum.photos/32/32" alt="User" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium text-bw-text-dark dark:text-white">ByeWind</span>
            </div>

            <div className="flex-1 overflow-y-auto px-4 scrollbar-hide">
                <div className="flex gap-6 text-sm mb-4 px-1">
                    <span
                        className={`cursor-pointer transition-colors ${selectedTab === 'favorites'
                            ? 'text-gray-900 dark:text-bw-text-dark'
                            : 'text-bw-text-light-dark hover:text-bw-text-dark dark:hover:text-bw-text-dark'
                            }`}
                        onClick={() => setSelectedTab('favorites')}
                    >
                        Favorites
                    </span>
                    <span
                        className={`cursor-pointer transition-colors ${selectedTab === 'recently'
                            ? 'text-gray-900 dark:text-bw-text-dark'
                            : 'text-bw-text-light-dark hover:text-bw-text-dark dark:hover:text-bw-text-dark'
                            }`}
                        onClick={() => setSelectedTab('recently')}
                    >
                        Recently
                    </span>
                </div>

                {selectedTab === 'favorites' && (
                    <div className="space-y-2 mb-6 px-1">
                        <div className="flex items-center gap-3 text-gray-900 dark:text-white py-1 px-1 cursor-pointer text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-bw-text-light-dark"></span>
                            Overview
                        </div>
                        <div className="flex items-center gap-3 text-gray-900 dark:text-white py-1 px-1 cursor-pointer text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-bw-text-light-dark"></span>
                            Projects
                        </div>
                    </div>
                )}

                <ul className="space-y-6">
                    <li>
                        <div className="text-sm font-regular text-bw-text-dark mb-2 px-2">Dashboards</div>
                        <div className={`${navItemClass('default')} pl-9`} onClick={() => onChangeView('default')}>
                            <Icons.Dashboard
                                className="text-[#1C1C1C] dark:text-white"
                                color="currentColor"
                            />
                            Default
                        </div>
                        <div className={navItemClass('orders')} onClick={() => setECommerceOpen(!eCommerceOpen)}>
                            {eCommerceOpen ? (
                                <Icons.ChevronDown
                                    size={16}
                                    className="text-[#1C1C1C] dark:text-bw-text-light-dark"
                                    color="currentColor"
                                />
                            ) : (
                                <Icons.ChevronRight
                                    size={16}
                                    className="text-[#1C1C1C] dark:text-bw-text-light-dark"
                                    color="currentColor"
                                />
                            )}
                            <Icons.eCommerce
                                className="text-[#1C1C1C] dark:text-white"
                                color="currentColor"
                            />
                            eCommerce
                        </div>
                        {eCommerceOpen && (
                            <div className="pl-9 space-y-1 mb-2">
                                <div className="text-gray-900 dark:text-white py-1 cursor-pointer text-sm">Overview</div>
                                <div className="text-gray-500 dark:text-white text-sm py-1 cursor-pointer hover:text-gray-900 dark:hover:text-white">Customers</div>
                                <div className="text-gray-500 dark:text-white text-sm py-1 cursor-pointer hover:text-gray-900 dark:hover:text-white" onClick={() => onChangeView('orders')}>Orders</div>
                                <div className="text-gray-500 dark:text-white text-sm py-1 cursor-pointer hover:text-gray-900 dark:hover:text-white">Revenue</div>
                                <div className="text-gray-500 dark:text-white text-sm py-1 cursor-pointer hover:text-gray-900 dark:hover:text-white">Growth</div>
                            </div>
                        )}
                        <div className={navItemClass('projects')}>
                            <Icons.ChevronRight
                                size={16}
                                className="text-[#1C1C1C] dark:text-bw-text-light-dark"
                                color="currentColor"
                            />
                            <Icons.Projects
                                className="text-[#1C1C1C] dark:text-white"
                                color="currentColor"
                            />
                            Projects
                        </div>
                        <div className={navItemClass('courses')}>
                            <Icons.ChevronRight
                                size={16}
                                className="text-[#1C1C1C] dark:text-bw-text-light-dark"
                                color="currentColor"
                            />
                            <Icons.Courses
                                className="text-[#1C1C1C] dark:text-white"
                                color="currentColor"
                            />
                            Online Courses
                        </div>
                    </li>

                    <li>
                        <div className="text-sm font-regular text-bw-text-dark mb-2 px-2">Pages</div>
                        <div className={`${navItemClass('userProfile')} cursor-pointer`} onClick={() => setUserProfileOpen(!userProfileOpen)}>
                            {userProfileOpen ? (
                                <Icons.ChevronDown
                                    size={16}
                                    className="text-[#1C1C1C] dark:text-bw-text-light-dark"
                                    color="currentColor"
                                />
                            ) : (
                                <Icons.ChevronRight
                                    size={16}
                                    className="text-[#1C1C1C] dark:text-bw-text-light-dark"
                                    color="currentColor"
                                />
                            )}
                            <Icons.Profile
                                className="text-[#1C1C1C] dark:text-white"
                                color="currentColor"
                            />
                            <span className="dark:text-white text-black flex-1 ">User Profile</span>
                        </div>

                        {/* Submenu */}
                        {userProfileOpen && (
                            <div className="pl-9 space-y-1 mb-2">
                                <div className="text-gray-900 dark:text-white py-1 cursor-pointer">Overview</div>
                                <div className="text-gray-500 dark:text-white text-sm py-1 cursor-pointer hover:text-gray-900 dark:hover:text-white">Projects</div>
                                <div className="text-gray-500 dark:text-white text-sm py-1 cursor-pointer hover:text-gray-900 dark:hover:text-white">Campaigns</div>
                                <div className="text-gray-500 dark:text-white text-sm py-1 cursor-pointer hover:text-gray-900 dark:hover:text-white">Documents</div>
                                <div className="text-gray-500 dark:text-white text-sm py-1 cursor-pointer hover:text-gray-900 dark:hover:text-white">Followers</div>
                            </div>
                        )}

                        <div className={navItemClass('account')}>
                            <Icons.ChevronRight
                                size={16}
                                className="text-[#1C1C1C] dark:text-bw-text-light-dark"
                                color="currentColor"
                            />
                            <Icons.Account
                                className="text-[#1C1C1C] dark:text-white"
                                color="currentColor"
                            />
                            Account
                        </div>
                        <div className={navItemClass('corporate')}>
                            <Icons.ChevronRight
                                size={16}
                                className="text-[#1C1C1C] dark:text-bw-text-light-dark"
                                color="currentColor"
                            />
                            <Icons.Corporate
                                className="text-[#1C1C1C] dark:text-white"
                                color="currentColor"
                            />
                            Corporate
                        </div>
                        <div className={navItemClass('blog')}>
                            <Icons.ChevronRight
                                size={16}
                                className="text-[#1C1C1C] dark:text-bw-text-light-dark"
                                color="currentColor"
                            />
                            <Icons.Blog
                                className="text-[#1C1C1C] dark:text-white"
                                color="currentColor"
                            />
                            Blog
                        </div>
                        <div className={navItemClass('social')}>
                            <Icons.ChevronRight
                                size={16}
                                className="text-[#1C1C1C] dark:text-bw-text-light-dark"
                                color="currentColor"
                            />
                            <Icons.Social
                                className="text-[#1C1C1C] dark:text-white"
                                color="currentColor"
                            />
                            Social
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;