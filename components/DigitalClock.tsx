import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeZone {
  name: string;
  label: string;
  offset: number;
  emoji: string;
}

const timeZones: TimeZone[] = [
  { name: 'UTC', label: 'Coordinated Universal Time', offset: 0, emoji: '🌍' },
  { name: 'PST', label: 'Pacific Standard Time', offset: -8, emoji: '🌊' },
  { name: 'MST', label: 'Mountain Standard Time', offset: -7, emoji: '⛰️' },
  { name: 'CST', label: 'Central Standard Time', offset: -6, emoji: '🌽' },
  { name: 'EST', label: 'Eastern Standard Time', offset: -5, emoji: '🗽' },
  { name: 'GMT', label: 'Greenwich Mean Time', offset: 0, emoji: '🇬🇧' },
  { name: 'CET', label: 'Central European Time', offset: 1, emoji: '🇪🇺' },
  { name: 'IST', label: 'India Standard Time', offset: 5.5, emoji: '🇮🇳' },
  { name: 'JST', label: 'Japan Standard Time', offset: 9, emoji: '🇯🇵' },
  { name: 'AEST', label: 'Australian Eastern Time', offset: 10, emoji: '🦘' },
  { name: 'NZST', label: 'New Zealand Standard Time', offset: 12, emoji: '🇳🇿' },
  { name: 'HST', label: 'Hawaii Standard Time', offset: -10, emoji: '🌺' },
];

export default function DigitalClock() {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, string> = {};
      const now = new Date();

      timeZones.forEach((tz) => {
        const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        const tzTime = new Date(utcTime.getTime() + tz.offset * 3600000);
        
        newTimes[tz.name] = tzTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
      });

      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-gray-900 to-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            🌍 Global Time Zone Clock
          </h1>
          <p className="text-gray-300 text-lg">
            Real-time clock displaying current time across different time zones
          </p>
        </motion.div>

        {/* Time Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {timeZones.map((tz, idx) => (
            <motion.div
              key={tz.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-secondary transition shadow-xl"
            >
              {/* Emoji and Region */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-secondary">{tz.name}</h3>
                  <p className="text-gray-400 text-sm">{tz.label}</p>
                </div>
                <span className="text-4xl">{tz.emoji}</span>
              </div>

              {/* Digital Time Display */}
              <div className="bg-black bg-opacity-50 rounded-lg p-4 mb-3 font-mono">
                <div className="text-4xl font-bold text-green-400 tracking-wider">
                  {times[tz.name] || '--:--:--'}
                </div>
              </div>

              {/* Offset Info */}
              <div className="text-gray-400 text-xs text-center">
                <span className="bg-gray-700 px-3 py-1 rounded-full">
                  UTC {tz.offset > 0 ? '+' : ''}{tz.offset}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <motion.div
          className="mt-16 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>Updates every second • UTC times are calculated in real-time</p>
        </motion.div>
      </div>
    </div>
  );
}
