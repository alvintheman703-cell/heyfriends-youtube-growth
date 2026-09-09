import React from 'react';
import { motion } from 'framer-motion';

type TabType = 'overview' | 'calendar' | 'upload' | 'team' | 'analytics';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const menuItems = [
  { id: 'overview', label: 'Overview', icon: '📊' },
  { id: 'calendar', label: 'Content Calendar', icon: '📅' },
  { id: 'upload', label: 'Upload Video', icon: '📹' },
  { id: 'team', label: 'My Team', icon: '👥' },
  { id: 'analytics', label: 'Analytics', icon: '📈' },
] as const;

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="w-64 bg-primary text-white p-8 min-h-screen sticky top-0">
      <div className="mb-12">
        <h1 className="text-2xl font-bold">Creator Hub</h1>
        <p className="text-gray-300 text-sm mt-1">Powered by HeyFriends!</p>
      </div>

      <nav className="space-y-4">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveTab(item.id as TabType)}
            className={`w-full text-left px-4 py-3 rounded-lg transition ${
              activeTab === item.id
                ? 'bg-secondary text-primary font-semibold'
                : 'text-white hover:bg-white hover:bg-opacity-10'
            }`}
            whileHover={{ x: 5 }}
          >
            <span className="text-xl mr-3">{item.icon}</span>
            {item.label}
          </motion.button>
        ))}
      </nav>

      <div className="mt-12 pt-8 border-t border-white border-opacity-20">
        <div className="bg-secondary bg-opacity-20 p-4 rounded-lg">
          <p className="text-sm font-semibold mb-2">Plan Status</p>
          <p className="text-xs text-gray-300 mb-3">Launch offer: $300/month</p>
          <button className="w-full px-3 py-2 bg-secondary text-primary rounded-lg text-sm font-bold hover:bg-opacity-90 transition">
            Manage Subscription
          </button>
        </div>
      </div>
    </aside>
  );
}