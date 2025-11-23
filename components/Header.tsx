import React from 'react';
import { Icons } from './Icons';

interface HeaderProps {
    leftSidebarOpen: boolean;
    toggleLeftSidebar: () => void;
    rightSidebarOpen: boolean;
    toggleRightSidebar: () => void;
    darkMode: boolean;
    toggleDarkMode: () => void;
    currentView: string;
}

const Header: React.FC<HeaderProps> = ({
    leftSidebarOpen,
    toggleLeftSidebar,
    rightSidebarOpen,
    toggleRightSidebar,
    darkMode,
    toggleDarkMode,
    currentView
}) => {
    return (
        <header className="h-[68px] border-b border-bw-border-muted dark:border-bw-border-dark flex items-center justify-between px-6 bg-white dark:bg-bw-bg-dark transition-colors flex-shrink-0 z-10">
            <div className="flex items-center gap-4">
                <button onClick={toggleLeftSidebar} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <Icons.Sidebar className={`transform transition-transform duration-300 ${leftSidebarOpen ? 'rotate-180' : 'rotate-0'}`} color={darkMode ? '#fff' : '#000'} />
                </button>
                <Icons.Star className="text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" color={darkMode ? '#fff' : '#000'} />
                <div className="flex items-center gap-4 text-bw-text-secondary dark:text-bw-text-dark-66 text-sm hidden sm:flex">
                    <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer">Dashboards</span>
                    <span>/</span>
                    <span className="text-gray-900 dark:text-white">{currentView === 'orders' ? 'Order List' : 'Default'}</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                    <Icons.Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bw-text-tertiary" size={16} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-9 pr-12 py-1.5 bg-gray-100 dark:bg-white/10 rounded-sm dark:text-bw-text-dark-33 text-sm dark:text-white outline-none focus:ring-2 focus:ring-blue-100 transition-all w-[160px] dark:placeholder-bw-text-dark-33"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs dark:text-bw-text-dark-33">⌘/</span>
                </div>

                <button onClick={toggleDarkMode} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                    <Icons.Sun color={darkMode ? '#fff' : '#000'} />
                </button>

                <button className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors hidden sm:block">
                    <Icons.Clock color={darkMode ? '#fff' : '#000'} />
                </button>

                <button className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors relative">
                    <Icons.Bell color={darkMode ? '#fff' : '#000'} />
                </button>

                <button onClick={toggleRightSidebar} className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors ${rightSidebarOpen ? 'text-gray-900 dark:text-white' : ''}`}>
                    <Icons.Sidebar className={`transform transition-transform duration-300 ${rightSidebarOpen ? 'rotate-0' : 'rotate-180'}`} color={darkMode ? '#fff' : '#000'} />
                </button>
            </div>
        </header>
    );
};

export default Header;
