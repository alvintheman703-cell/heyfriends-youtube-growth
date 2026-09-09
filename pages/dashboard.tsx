import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Sidebar from '../components/dashboard/Sidebar';
import TeamDashboard from '../components/dashboard/TeamDashboard';
import ContentCalendar from '../components/dashboard/ContentCalendar';
import VideoUploader from '../components/dashboard/VideoUploader';
import { motion } from 'framer-motion';

type TabType = 'overview' | 'calendar' | 'upload' | 'team' | 'analytics';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={activeTab}
          >
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'calendar' && <ContentCalendar />}
            {activeTab === 'upload' && <VideoUploader />}
            {activeTab === 'team' && <TeamDashboard />}
            {activeTab === 'analytics' && <AnalyticsTab />}
          </motion.div>
        </main>
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Welcome back, Creator! 🎬</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-gray-600 text-sm font-semibold mb-2">VIDEOS THIS MONTH</div>
          <div className="text-4xl font-bold text-primary">2/4</div>
          <div className="text-gray-500 text-sm mt-2">2 completed, 2 in progress</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-gray-600 text-sm font-semibold mb-2">HOURS SAVED</div>
          <div className="text-4xl font-bold text-success">28</div>
          <div className="text-gray-500 text-sm mt-2">This month vs DIY</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-gray-600 text-sm font-semibold mb-2">NEXT DEADLINE</div>
          <div className="text-2xl font-bold text-primary">Sep 15</div>
          <div className="text-gray-500 text-sm mt-2">Video #3 delivery</div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-primary mb-6">Your Dedicated Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <TeamMember name="Sarah Chen" role="Lead Writer" image="👩‍💼" />
          <TeamMember name="Marcus Johnson" role="Video Editor" image="👨‍💻" />
          <TeamMember name="Elena Rodriguez" role="Thumbnail Designer" image="👩‍🎨" />
        </div>
      </div>
    </div>
  );
}

function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="text-center">
      <div className="text-5xl mb-4">{image}</div>
      <h3 className="font-bold text-lg text-primary">{name}</h3>
      <p className="text-gray-600">{role}</p>
      <button className="mt-4 px-4 py-2 bg-primary text-white rounded-full text-sm hover:bg-opacity-90 transition">
        Message
      </button>
    </div>
  );
}

function AnalyticsTab() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Your Impact 📊</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-lg font-bold text-primary mb-6">Video Performance</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">Avg CTR</span>
                <span className="text-primary font-bold">+342%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">Avg Views</span>
                <span className="text-primary font-bold">+156%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-lg font-bold text-primary mb-6">Revenue Impact</h3>
          <div className="text-4xl font-bold text-success mb-2">$12,450</div>
          <p className="text-gray-600">Additional revenue from improved metrics</p>
        </div>
      </div>
    </div>
  );
}