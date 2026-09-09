import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function VideoUploader() {
  const [dragging, setDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setUploadedFile(files[0]);
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
        }
        setUploadProgress(progress);
      }, 500);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Upload Raw Footage 📹</h1>

      {/* Upload Area */}
      <motion.div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-12 text-center transition ${
          dragging ? 'border-primary bg-primary bg-opacity-5' : 'border-gray-300'
        }`}
        animate={{ scale: dragging ? 1.02 : 1 }}
      >
        <div className="text-5xl mb-4">📹</div>
        <h3 className="text-xl font-bold text-primary mb-2">Drop your video here</h3>
        <p className="text-gray-600 mb-6">
          or{' '}
          <button className="text-primary font-semibold hover:underline">
            browse files
          </button>
        </p>
        <p className="text-sm text-gray-500">
          Supports MP4, MOV, AVI (Max 10GB)
        </p>
      </motion.div>

      {/* Upload Progress */}
      {uploadedFile && (
        <motion.div
          className="bg-white p-6 rounded-lg shadow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-bold text-primary mb-4">Uploading: {uploadedFile.name}</h3>
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-primary h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${uploadProgress}%` }}
              ></motion.div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{Math.round(uploadProgress)}% uploaded</p>
          </div>

          {uploadProgress === 100 && (
            <div className="bg-success bg-opacity-10 p-4 rounded-lg">
              <p className="text-success font-semibold">✓ Upload complete!</p>
              <p className="text-gray-600 text-sm mt-2">
                Your team has been notified. Review will start shortly.
              </p>
            </div>
          )}
        </motion.div>
      )}

      {/* Review Instructions */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-bold text-primary mb-3">💡 Pro Tips</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>✓ Upload 2-3 takes for our team to choose the best one</li>
          <li>✓ Include B-roll if available (makes editing faster)</li>
          <li>✓ Add notes about your vision in the comment section below</li>
        </ul>
      </div>

      {/* Comments */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-bold text-primary mb-4">Notes for Your Team</h3>
        <textarea
          placeholder="Share your vision, style preferences, or specific requests..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={4}
        ></textarea>
        <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition font-semibold">
          Save Notes
        </button>
      </div>
    </div>
  );
}