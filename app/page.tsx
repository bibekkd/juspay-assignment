'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import DashboardView from '../components/DashboardView';
import OrderListView from '../components/OrderListView';
import { Icons } from '../components/Icons';

export default function Home() {
  const [currentView, setCurrentView] = useState('default');
  const [darkMode, setDarkMode] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleRightSidebar = () => setRightSidebarOpen(!rightSidebarOpen);
  const toggleLeftSidebar = () => setLeftSidebarOpen(!leftSidebarOpen);

  return (
    <div className="flex h-screen bg-bw-bg-light dark:bg-bw-bg-dark transition-colors duration-300 font-sans text-ag-14 selection:bg-blue-100 dark:selection:bg-blue-900 overflow-hidden">

      {/* Mobile Menu Button Overlay - visible only when sidebar is closed on mobile */}
      {!leftSidebarOpen && (
        <div className="md:hidden fixed top-4 left-4 z-50">
          <button onClick={toggleLeftSidebar} className="p-2 bg-white dark:bg-bw-sidebar-dark rounded shadow border border-gray-200 dark:border-bw-border-dark text-gray-700 dark:text-white">
            <Icons.Sidebar className="transform rotate-180" />
          </button>
        </div>
      )}

      {/* Main Sidebar Container - Controls width for collapse/expand */}
      <div className={`${leftSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 ease-in-out overflow-hidden flex-shrink-0 h-full relative`}>
        {/* Inner container for fixed width content to prevent squashing during transition */}
        <div className="w-64 h-full">
          <Sidebar activeView={currentView} onChangeView={setCurrentView} />
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-full">

        {/* Header */}
        <header className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 bg-white dark:bg-bw-sidebar-dark transition-colors flex-shrink-0 z-10">
          <div className="flex items-center gap-4">
            <button onClick={toggleLeftSidebar} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <Icons.Sidebar className={`transform transition-transform duration-300 ${leftSidebarOpen ? 'rotate-180' : 'rotate-0'}`} color={darkMode ? '#fff' : '#000'} />
            </button>
            <Icons.Star className="text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" color={darkMode ? '#fff' : '#000'} />
            <div className="flex items-center gap-2 text-gray-400 text-sm hidden sm:flex">
              <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer">Dashboards</span>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">{currentView === 'orders' ? 'Order List' : 'Default'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Icons.Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-12 py-1.5 bg-gray-100 dark:bg-white/10 rounded-lg text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-100 transition-all w-48"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">⌘/</span>
            </div>

            <button onClick={() => setDarkMode(!darkMode)} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
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

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-hidden relative">
          {currentView === 'orders' ? <OrderListView /> : <DashboardView />}
        </div>
      </main>

      {/* Right Sidebar */}
      {rightSidebarOpen && <RightSidebar />}

    </div>
  );
}