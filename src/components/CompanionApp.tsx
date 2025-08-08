import React, { useState } from 'react';
import { Heart, CheckCircle, MessageCircle, Target, Smile, Frown, Meh, Star, Gift } from 'lucide-react';

const CompanionApp = () => {
  const [selectedMood, setSelectedMood] = useState<string>('good');
  const [activeTab, setActiveTab] = useState<'home' | 'coach' | 'quests'>('home');

  const dailyTasks = [
    { id: 1, title: 'Morning check-in', completed: true, points: 10 },
    { id: 2, title: 'Log your mood', completed: true, points: 5 },
    { id: 3, title: 'Practice breathing exercise', completed: false, points: 15 },
    { id: 4, title: 'Share progress with sponsor', completed: false, points: 20 },
    { id: 5, title: 'Evening reflection', completed: false, points: 10 }
  ];

  const microTasks = [
    { id: 1, title: 'Take 5 deep breaths', duration: '2 min', points: 5, icon: '🫁' },
    { id: 2, title: 'Message your sponsor', duration: '3 min', points: 10, icon: '💬' },
    { id: 3, title: 'Walk around the block', duration: '10 min', points: 15, icon: '🚶' },
    { id: 4, title: 'Listen to calming music', duration: '5 min', points: 8, icon: '🎵' },
    { id: 5, title: 'Write in gratitude journal', duration: '5 min', points: 12, icon: '📝' },
    { id: 6, title: 'Do 10 jumping jacks', duration: '1 min', points: 5, icon: '🏃' }
  ];

  const moods = [
    { id: 'great', emoji: '😊', label: 'Great', color: 'text-green-400' },
    { id: 'good', emoji: '🙂', label: 'Good', color: 'text-blue-400' },
    { id: 'okay', emoji: '😐', label: 'Okay', color: 'text-yellow-400' },
    { id: 'struggling', emoji: '😔', label: 'Struggling', color: 'text-orange-400' },
    { id: 'difficult', emoji: '😰', label: 'Difficult', color: 'text-red-400' }
  ];

  const renderHome = () => (
    <div className="space-y-6">
      {/* Streak Display */}
      <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 shadow-2xl shadow-green-500/20 relative overflow-hidden">
        {/* Monster decoration */}
        <div className="absolute top-2 right-2 text-3xl opacity-10">👻</div>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/50">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">18 Days</h2>
          <p className="text-green-300 mb-4 drop-shadow-lg">Smoke-free streak! 🎉</p>
          <div className="bg-black/60 rounded-lg p-3 border border-white/10">
            <p className="text-sm text-gray-400">Next milestone in 7 days</p>
            <div className="w-full bg-gray-800 rounded-full h-2 mt-2 border border-gray-600/30">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full shadow-lg shadow-green-400/30" style={{ width: '72%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mood Tracker */}
      <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 shadow-2xl shadow-purple-500/20 relative overflow-hidden">
        {/* Monster decoration */}
        <div className="absolute bottom-2 left-2 text-2xl opacity-10">👾</div>
        
        <h3 className="text-lg font-bold text-white mb-4">How are you feeling today?</h3>
        <div className="grid grid-cols-5 gap-3">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood.id)}
              className={`p-3 rounded-lg border transition-all duration-200 ${
                selectedMood === mood.id
                  ? 'bg-white/20 border-white/30 scale-105 shadow-lg shadow-purple-500/30'
                  : 'bg-black/40 border-white/10 hover:border-cyan-500/30'
              }`}
            >
              <div className="text-2xl mb-1">{mood.emoji}</div>
              <div className={`text-xs font-medium ${mood.color}`}>{mood.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Daily Checklist */}
      <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30 shadow-2xl shadow-blue-500/20 relative overflow-hidden">
        {/* Monster decoration */}
        <div className="absolute top-2 right-2 text-2xl opacity-10">🧛</div>
        
        <h3 className="text-lg font-bold text-white mb-4">Daily Checklist</h3>
        <div className="space-y-3">
          {dailyTasks.map((task) => (
            <div
              key={task.id}
              className={`p-3 rounded-lg border transition-all duration-200 ${
                task.completed
                  ? 'bg-green-500/20 border-green-500/30 shadow-lg shadow-green-500/20'
                  : 'bg-black/40 border-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    task.completed ? 'bg-green-500 shadow-lg shadow-green-500/50' : 'bg-gray-700'
                  } border border-white/20`}>
                    {task.completed && <CheckCircle className="w-4 h-4 text-white" />}
                  </div>
                  <span className={`${task.completed ? 'text-green-300' : 'text-white'}`}>
                    {task.title}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-300 drop-shadow-lg" />
                  <span className="text-yellow-300 text-sm drop-shadow-lg">{task.points}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCoach = () => (
    <div className="space-y-6">
      {/* AI Coach Header */}
      <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 relative overflow-hidden">
        {/* Monster decoration */}
        <div className="absolute top-2 right-2 text-3xl opacity-10">🤖</div>
        
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white drop-shadow-lg">AI Coach Maya</h2>
            <p className="text-cyan-300">Your personal quit companion</p>
          </div>
        </div>
      </div>

      {/* Coach Messages */}
      <div className="space-y-4">
        <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-4 border border-green-500/30 shadow-lg shadow-green-500/20">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">🎉</div>
            <div>
              <h4 className="text-green-300 font-bold drop-shadow-lg">Congratulations!</h4>
              <p className="text-white text-sm">You've unlocked the "Craving Resistance" badge! Your 18-day streak shows incredible determination.</p>
            </div>
          </div>
        </div>

        <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-4 border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">💡</div>
            <div>
              <h4 className="text-cyan-300 font-bold drop-shadow-lg">Tip of the Day</h4>
              <p className="text-white text-sm">When cravings hit, try the 4-7-8 breathing technique: Inhale for 4, hold for 7, exhale for 8. It activates your body's relaxation response!</p>
            </div>
          </div>
        </div>

        <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-4 border border-purple-500/30 shadow-lg shadow-purple-500/20">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">📊</div>
            <div>
              <h4 className="text-purple-300 font-bold drop-shadow-lg">Progress Insight</h4>
              <p className="text-white text-sm">Your mood has been consistently positive this week! This is a strong indicator that your quit journey is on the right track.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-500/30 shadow-2xl shadow-gray-500/20 relative overflow-hidden">
        {/* Monster decoration */}
        <div className="absolute bottom-2 right-2 text-2xl opacity-10">👹</div>
        
        <h3 className="text-lg font-bold text-white mb-4">Quick Support</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 hover:bg-red-500/30 transition-colors shadow-lg shadow-red-500/20">
            <div className="text-2xl mb-1">🆘</div>
            <div className="text-sm font-medium">Craving Help</div>
          </button>
          <button className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-cyan-300 hover:bg-blue-500/30 transition-colors shadow-lg shadow-blue-500/20">
            <div className="text-2xl mb-1">🧘</div>
            <div className="text-sm font-medium">Meditation</div>
          </button>
          <button className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 hover:bg-green-500/30 transition-colors shadow-lg shadow-green-500/20">
            <div className="text-2xl mb-1">💬</div>
            <div className="text-sm font-medium">Chat with Maya</div>
          </button>
          <button className="p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-colors shadow-lg shadow-purple-500/20">
            <div className="text-2xl mb-1">📱</div>
            <div className="text-sm font-medium">Call Sponsor</div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderQuests = () => (
    <div className="space-y-6">
      <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 relative overflow-hidden">
        {/* Monster decoration */}
        <div className="absolute top-2 right-2 text-3xl opacity-10">🐉</div>
        
        <h2 className="text-xl font-bold text-white mb-2 drop-shadow-lg">Quest Board</h2>
        <p className="text-yellow-300 drop-shadow-lg">Complete micro-tasks to earn points and build healthy habits!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {microTasks.map((task) => (
          <div
            key={task.id}
            className="bg-black/60 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-cyan-500/30 transition-all duration-200 shadow-lg shadow-black/50"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-3xl">{task.icon}</div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-300 drop-shadow-lg" />
                <span className="text-yellow-300 font-bold drop-shadow-lg">{task.points}</span>
              </div>
            </div>
            <h4 className="text-white font-medium mb-1">{task.title}</h4>
            <p className="text-gray-500 text-sm mb-3">{task.duration}</p>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 rounded-lg transition-all duration-200 shadow-lg shadow-purple-500/30 border border-purple-400/30">
              Start Quest
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tab Navigation */}
      <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-2 mb-8 border border-white/20 shadow-2xl shadow-black/50">
        <div className="flex space-x-2">
          {[
            { id: 'home', label: 'Home', icon: Heart },
            { id: 'coach', label: 'AI Coach', icon: MessageCircle },
            { id: 'quests', label: 'Quest Board', icon: Target }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-200 flex-1 justify-center ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 hover:border-cyan-500/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'home' && renderHome()}
      {activeTab === 'coach' && renderCoach()}
      {activeTab === 'quests' && renderQuests()}
    </div>
  );
};

export default CompanionApp;