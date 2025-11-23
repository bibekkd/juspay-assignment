'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import DashboardView from '../components/DashboardView';
import OrderListView from '../components/OrderListView';
import Header from '../components/Header';
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
    <div className="flex h-screen bg-white dark:bg-bw-bg-dark transition-colors duration-300 font-sans text-ag-14 selection:bg-blue-100 dark:selection:bg-blue-900 overflow-hidden">

      {/* Mobile Menu Button Overlay - visible only when sidebar is closed on mobile */}
      {!leftSidebarOpen && (
        <div className="md:hidden fixed top-4 left-4 z-50">
          <button onClick={toggleLeftSidebar} className="p-2 bg-white dark:bg-bw-sidebar-dark rounded shadow border border-gray-200 dark:border-bw-border-dark text-gray-700 dark:text-white">
            <Icons.Sidebar className="transform rotate-180" />
          </button>
        </div>
      )}

      {/* Main Sidebar Container - Controls width for collapse/expand */}
      <div className={`${leftSidebarOpen ? 'w-[212px]' : 'w-0'} transition-all duration-300 ease-in-out overflow-hidden flex-shrink-0 h-full relative`}>
        {/* Inner container for fixed width content to prevent squashing during transition */}
        <div className="w-[212px] h-full">
          <Sidebar activeView={currentView} onChangeView={setCurrentView} />
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-full">

        {/* Header */}
        <Header
          leftSidebarOpen={leftSidebarOpen}
          toggleLeftSidebar={toggleLeftSidebar}
          rightSidebarOpen={rightSidebarOpen}
          toggleRightSidebar={toggleRightSidebar}
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          currentView={currentView}
        />

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