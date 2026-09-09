import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  role: string;
}

const mockMessages: Message[] = [
  {
    id: 1,
    author: 'Sarah Chen',
    role: 'Lead Writer',
    content: 'Script for video #3 is ready for review! I incorporated the hook you mentioned.',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    author: 'Marcus Johnson',
    role: 'Video Editor',
    content: 'Sent the rough cut—color grading in progress. Should be done by tomorrow.',
    timestamp: '1 hour ago',
  },
];

export default function TeamDashboard() {
  const [selectedVideo, setSelectedVideo] = useState('video-3');
  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">My Team & Communication 👥</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Video Project Selector */}
        <div className="md:col-span-1 bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-primary mb-4">Active Projects</h3>
          <div className="space-y-2">
            {['Video #1', 'Video #2', 'Video #3', 'Video #4'].map((video, idx) => (
              <motion.button
                key={idx}
                onClick={() => setSelectedVideo(`video-${idx + 1}`)}
                className={`w-full text-left px-4 py-3 rounded-lg transition ${
                  selectedVideo === `video-${idx + 1}`
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ x: 5 }}
              >
                <div className="font-semibold">{video}</div>
                <div className="text-xs opacity-70">In editing</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Chat Thread */}
        <div className="md:col-span-2 bg-white rounded-lg shadow flex flex-col h-96">
          <div className="border-b p-6">
            <h3 className="text-lg font-bold text-primary">Video #3 Thread</h3>
            <p className="text-gray-600 text-sm">Scripting → Editing → Done</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {mockMessages.map((msg) => (
              <motion.div
                key={msg.id}
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-3xl">👤</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-primary">{msg.author}</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                      {msg.role}
                    </span>
                    <span className="text-xs text-gray-500">{msg.timestamp}</span>
                  </div>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{msg.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Leave feedback or ask a question..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition font-semibold">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}