import React, { useState } from 'react';
import { Heart, Gift, MessageCircle, TrendingUp, Calendar, Award, Send, Phone } from 'lucide-react';

const SponsorView = () => {
  const [message, setMessage] = useState('');

  const progressData = [
    { day: 'Mon', mood: 4, cravings: 2 },
    { day: 'Tue', mood: 5, cravings: 1 },
    { day: 'Wed', mood: 3, cravings: 4 },
    { day: 'Thu', mood: 4, cravings: 2 },
    { day: 'Fri', mood: 5, cravings: 1 },
    { day: 'Sat', mood: 4, cravings: 3 },
    { day: 'Sun', mood: 5, cravings: 1 }
  ];

  const milestones = [
    { day: 1, title: 'First Day', completed: true, date: '18 days ago' },
    { day: 7, title: 'One Week', completed: true, date: '11 days ago' },
    { day: 14, title: 'Two Weeks', completed: true, date: '4 days ago' },
    { day: 21, title: 'Three Weeks', completed: false, date: 'In 3 days' },
    { day: 30, title: 'One Month', completed: false, date: 'In 12 days' }
  ];

  const recentLogs = [
    { time: '2 hours ago', type: 'mood', content: 'Feeling good today! 😊', mood: 'positive' },
    { time: '5 hours ago', type: 'craving', content: 'Had a small craving but used breathing technique', mood: 'neutral' },
    { time: '1 day ago', type: 'achievement', content: 'Completed all daily tasks!', mood: 'positive' },
    { time: '2 days ago', type: 'mood', content: 'Struggling a bit today 😔', mood: 'negative' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Supporting Alex</h1>
              <p className="text-blue-300">18 days smoke-free • Your mentee is doing great!</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>Message</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Progress Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Journey Map */}
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
              Progress Together
            </h3>
            
            <div className="relative">
              {/* Trail Path */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">You</span>
                  </div>
                  <span className="text-blue-300 text-xs">Sponsor</span>
                </div>
                <div className="flex-1 mx-4 h-2 bg-gradient-to-r from-blue-500 via-green-500 to-emerald-500 rounded-full relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-green-500"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">Alex</span>
                  </div>
                  <span className="text-green-300 text-xs">18 days</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-white text-sm">Walking the journey together</p>
                <p className="text-gray-400 text-xs">Next milestone: 21 days (3 days to go)</p>
              </div>
            </div>
          </div>

          {/* Weekly Progress Chart */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-white mb-4">This Week's Progress</h3>
            <div className="grid grid-cols-7 gap-2">
              {progressData.map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-xs text-gray-400 mb-2">{day.day}</div>
                  <div className="space-y-1">
                    <div className={`h-8 rounded ${
                      day.mood >= 4 ? 'bg-green-500' : day.mood >= 3 ? 'bg-yellow-500' : 'bg-red-500'
                    }`} title={`Mood: ${day.mood}/5`}></div>
                    <div className={`h-4 rounded ${
                      day.cravings <= 1 ? 'bg-green-400' : day.cravings <= 3 ? 'bg-yellow-400' : 'bg-red-400'
                    }`} title={`Cravings: ${day.cravings}`}></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    <div>😊 {day.mood}</div>
                    <div>🚫 {day.cravings}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-4">
              <span>😊 Mood (1-5)</span>
              <span>🚫 Cravings (count)</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gradient-to-br from-gray-900/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-500/20">
            <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentLogs.map((log, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    log.mood === 'positive' ? 'bg-green-500/20 border-green-500/30' :
                    log.mood === 'negative' ? 'bg-red-500/20 border-red-500/30' :
                    'bg-blue-500/20 border-blue-500/30'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-white text-sm">{log.content}</p>
                      <p className="text-gray-400 text-xs mt-1">{log.time}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      log.type === 'mood' ? 'bg-purple-500/20 text-purple-400' :
                      log.type === 'craving' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {log.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Milestones */}
          <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-400" />
              Milestones
            </h3>
            <div className="space-y-3">
              {milestones.map((milestone) => (
                <div
                  key={milestone.day}
                  className={`p-3 rounded-lg border ${
                    milestone.completed
                      ? 'bg-green-500/20 border-green-500/30'
                      : 'bg-gray-500/20 border-gray-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`font-medium text-sm ${
                        milestone.completed ? 'text-green-400' : 'text-gray-400'
                      }`}>
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-gray-500">{milestone.date}</p>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      milestone.completed ? 'bg-green-500' : 'bg-gray-600'
                    }`}>
                      <span className="text-white text-xs font-bold">{milestone.day}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Send Support */}
          <div className="bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Gift className="w-5 h-5 mr-2 text-pink-400" />
              Send Support
            </h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <button className="p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-yellow-400 hover:bg-yellow-500/30 transition-colors text-sm">
                  <div className="text-lg mb-1">🪙</div>
                  <div>Send Coins</div>
                </button>
                <button className="p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 hover:bg-purple-500/30 transition-colors text-sm">
                  <div className="text-lg mb-1">⭐</div>
                  <div>Boost XP</div>
                </button>
                <button className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-500/30 transition-colors text-sm">
                  <div className="text-lg mb-1">🎁</div>
                  <div>Send Gift</div>
                </button>
                <button className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors text-sm">
                  <div className="text-lg mb-1">💝</div>
                  <div>Care Package</div>
                </button>
              </div>

              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write an encouraging message..."
                  className="w-full bg-black/30 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 text-sm resize-none"
                  rows={3}
                />
                <button className="w-full mt-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-medium py-2 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-indigo-500/20">
            <h3 className="text-lg font-bold text-white mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Total streak</span>
                <span className="text-white font-bold">18 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg mood</span>
                <span className="text-green-400 font-bold">4.3/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cravings/day</span>
                <span className="text-yellow-400 font-bold">2.1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tasks completed</span>
                <span className="text-blue-400 font-bold">89%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorView;