import React, { useState } from 'react';
import { FaTimes as X } from "react-icons/fa";

interface VolunteerEntry {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface Props {
  entries: VolunteerEntry[];
  setEntries: (entries: VolunteerEntry[]) => void;
}

const MentorshipVolunteering: React.FC<Props> = ({ entries, setEntries }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddEntry = () => {
    if (!formData.title || !formData.date) return;

    const newEntry: VolunteerEntry = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      date: formData.date
    };

    setEntries([...entries, newEntry]);
    setFormData({ title: '', description: '', date: '' });
  };

  const removeEntry = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  return (
    <div className="min-h-screen   md:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Form */}
        <div className="p-4 md:p-8 bg-[#192b21] rounded-2xl shadow-r-2xl">
          <div className="mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Mentorship & Volunteering</h1>
            <p className="text-gray-300 text-sm md:text-lg">Highlight your commitment to giving back and supporting others.</p>
          </div>

          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-white mb-3">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Mentor at Springboard"
                className="w-full px-4 py-4 bg-green-800/50 border border-green-700/50 text-white placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-white mb-3">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your role and responsibilities"
                rows={5}
                className="w-full px-4 py-4 bg-green-800/50 border border-green-700/50 text-white placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-white mb-3">Date</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                placeholder="e.g., 2021 - Present"
                className="w-full px-4 py-4 bg-green-800/50 border border-green-700/50 text-white placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Add Entry Button */}
            <button
              onClick={handleAddEntry}
              className="bg-green-600 hover:bg-green-500 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-3 text-lg"
            >
              <span className="text-xl">+</span>
              Add Entry
            </button>
          </div>
        </div>

        {/* Right Side - Resume Preview */}
        <div className="md:p-8">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Resume Preview</h2>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-lg md:text-xl font-bold text-green-400 mb-6">Mentorship & Volunteering</h3>
            
            <div className="space-y-4">
              {(entries || []).map((entry) => (
                <div key={entry.id} className="group">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-white font-medium italic text-lg">{entry.title}</h4>
                    <button
                      onClick={() => removeEntry(entry.id)}
                      className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition-all duration-200"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{entry.date}</p>
                  {entry.description && (
                    <p className="text-gray-400 text-sm leading-relaxed">{entry.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipVolunteering;
