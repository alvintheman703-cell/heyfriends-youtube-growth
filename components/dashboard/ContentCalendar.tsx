import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoItem {
  id: number;
  date: string;
  title: string;
  status: 'planned' | 'scripting' | 'editing' | 'done';
  team: string;
}

const mockVideos: VideoItem[] = [
  { id: 1, date: 'Sep 8', title: 'How to Build a Startup - Part 2', status: 'done', team: 'Team A' },
  { id: 2, date: 'Sep 15', title: 'AI Tools That Save 10 Hours/Week', status: 'editing', team: 'Team A' },
  { id: 3, date: 'Sep 22', title: 'Interview with Sarah Chen', status: 'scripting', team: 'Team B' },
  { id: 4, date: 'Sep 29', title: 'Q&A Special - Your Best Questions', status: 'planned', team: 'Team A' },
];

const statusColors: Record<string, string> = {
  done: 'bg-success text-white',
  editing: 'bg-blue-500 text-white',
  scripting: 'bg-yellow-500 text-white',
  planned: 'bg-gray-400 text-white',
};

export default function ContentCalendar() {
  const [videos, setVideos] = useState(mockVideos);
  const [newVideoTitle, setNewVideoTitle] = useState('');

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Content Calendar 📅</h1>

      {/* Add New Video */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-bold text-primary mb-4">Plan Next Video</h3>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Video title..."
            value={newVideoTitle}
            onChange={(e) => setNewVideoTitle(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition font-semibold">
            Add to Calendar
          </button>
        </div>
      </div>

      {/* Video List */}
      <div className="space-y-3">
        {videos.map((video, idx) => (
          <motion.div
            key={video.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-2xl font-bold text-primary w-16">{video.date}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{video.title}</h4>
                    <p className="text-sm text-gray-600">{video.team}</p>
                  </div>
                </div>
              </div>
              <span className={`px-4 py-2 rounded-full font-semibold text-sm ${statusColors[video.status]}`}>
                {video.status.charAt(0).toUpperCase() + video.status.slice(1)}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}