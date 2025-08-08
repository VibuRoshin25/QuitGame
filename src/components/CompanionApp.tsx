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
    { id: 'great', image: '/src/assets/sm1.jpg', label: 'Great', color: 'text-gray-300' },
    { id: 'good', image: '/src/assets/sm2.jpg', label: 'Good', color: 'text-gray-400' },
    { id: 'okay', image: '/src/assets/sm5.jpg', label: 'Okay', color: 'text-gray-500' },
    { id: 'struggling', image: '/src/assets/sm7.jpg', label: 'Struggling', color: 'text-gray-600' },
    { id: 'difficult', image: '/src/assets/sm1.jpg', label: 'Difficult', color: 'text-gray-700' }
  ];

  const renderHome = () => (
    <div className="space-y-6">
      {/* Streak Display */}
      <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl shadow-black/50 relative overflow-hidden">
        {/* Terrifying Monster decoration */}
        <div className="absolute top-2 right-2 w-12 h-12 opacity-20">
          <img src="/src/assets/sm1.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-black/50 border border-gray-600">
            <Heart className="w-10 h-10 text-gray-300" />
          </div>
          <h2 className="text-3xl font-bold text-gray-100 mb-2 drop-shadow-2xl">18 Days</h2>
          <p className="text-gray-400 mb-4 drop-shadow-lg">Smoke-free streak!</p>
          <div className="bg-black/80 rounded-lg p-3 border border-gray-700/30">
            <p className="text-sm text-gray-500">Next milestone in 7 days</p>
            <div className="w-full bg-gray-900 rounded-full h-2 mt-2 border border-gray-700/50">
              <div className="bg-gradient-to-r from-gray-600 to-gray-400 h-2 rounded-full shadow-lg shadow-gray-500/30" style={{ width: '72%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mood Tracker */}
      <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl shadow-black/50 relative overflow-hidden">
        {/* Terrifying Monster decoration */}
        <div className="absolute bottom-2 left-2 w-8 h-8 opacity-15">
          <img src="/src/assets/sm2.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
        </div>
        
        <h3 className="text-lg font-bold text-gray-100 mb-4">How are you feeling today?</h3>
        <div className="grid grid-cols-5 gap-3">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood.id)}
              className={`p-3 rounded-lg border transition-all duration-200 ${
                selectedMood === mood.id
                  ? 'bg-gray-800/50 border-gray-600/50 scale-105 shadow-lg shadow-black/50'
                  : 'bg-black/60 border-gray-700/30 hover:border-gray-600/50'
              }`}
            >
              <div className="w-8 h-8 mb-1 mx-auto">
                <img src={mood.image} alt="Mood" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
              </div>
              <div className={`text-xs font-medium ${mood.color}`}>{mood.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Daily Checklist */}
      <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl shadow-black/50 relative overflow-hidden">
        {/* Terrifying Monster decoration */}
        <div className="absolute top-2 right-2 w-8 h-8 opacity-15">
          <img src="/src/assets/sm5.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
        </div>
        
        <h3 className="text-lg font-bold text-gray-100 mb-4">Daily Checklist</h3>
        <div className="space-y-3">
          {dailyTasks.map((task) => (
            <div
              key={task.id}
              className={`p-3 rounded-lg border transition-all duration-200 ${
                task.completed
                  ? 'bg-gray-800/50 border-gray-600/50 shadow-lg shadow-black/30'
                  : 'bg-black/60 border-gray-700/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    task.completed ? 'bg-gray-600 shadow-lg shadow-black/50' : 'bg-gray-800'
                  } border border-gray-600/50`}>
                    {task.completed && <CheckCircle className="w-4 h-4 text-gray-200" />}
                  </div>
                  <span className={`${task.completed ? 'text-gray-300' : 'text-gray-200'}`}>
                    {task.title}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-gray-400 drop-shadow-lg" />
                  <span className="text-gray-300 text-sm drop-shadow-lg">{task.points}</span>
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
      <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl shadow-black/50 relative overflow-hidden">
        {/* Terrifying Monster decoration */}
        <div className="absolute top-2 right-2 w-12 h-12 opacity-20">
          <img src="/src/assets/sm7.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center shadow-lg shadow-black/50 border border-gray-600">
            <MessageCircle className="w-8 h-8 text-gray-300" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-100 drop-shadow-2xl">AI Coach Maya</h2>
            <p className="text-gray-400">Your personal quit companion</p>
          </div>
        </div>
      </div>

      {/* Coach Messages */}
      <div className="space-y-4">
        <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-4 border border-gray-700/50 shadow-lg shadow-black/30">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8">
              <img src="/src/assets/sm1.jpg" alt="Achievement" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
            </div>
            <div>
              <h4 className="text-gray-300 font-bold drop-shadow-lg">Congratulations!</h4>
              <p className="text-gray-200 text-sm">You've unlocked the "Craving Resistance" badge! Your 18-day streak shows incredible determination.</p>
            </div>
          </div>
        </div>

        <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-4 border border-gray-700/50 shadow-lg shadow-black/30">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8">
              <img src="/src/assets/sm2.jpg" alt="Tip" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
            </div>
            <div>
              <h4 className="text-gray-300 font-bold drop-shadow-lg">Tip of the Day</h4>
              <p className="text-gray-200 text-sm">When cravings hit, try the 4-7-8 breathing technique: Inhale for 4, hold for 7, exhale for 8. It activates your body's relaxation response!</p>
            </div>
          </div>
        </div>

        <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-4 border border-gray-700/50 shadow-lg shadow-black/30">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8">
              <img src="/src/assets/sm5.jpg" alt="Progress" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
            </div>
            <div>
              <h4 className="text-gray-300 font-bold drop-shadow-lg">Progress Insight</h4>
              <p className="text-gray-200 text-sm">Your mood has been consistently positive this week! This is a strong indicator that your quit journey is on the right track.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl shadow-black/50 relative overflow-hidden">
        {/* Terrifying Monster decoration */}
        <div className="absolute bottom-2 right-2 w-8 h-8 opacity-15">
          <img src="/src/assets/sm7.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
        </div>
        
        <h3 className="text-lg font-bold text-gray-100 mb-4">Quick Support</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors shadow-lg shadow-black/30">
            <div className="w-8 h-8 mb-1 mx-auto">
              <img src="/src/assets/sm1.jpg" alt="Help" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
            </div>
            <div className="text-sm font-medium">Craving Help</div>
          </button>
          <button className="p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors shadow-lg shadow-black/30">
            <div className="w-8 h-8 mb-1 mx-auto">
              <img src="/src/assets/sm2.jpg" alt="Meditation" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
            </div>
            <div className="text-sm font-medium">Meditation</div>
          </button>
          <button className="p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors shadow-lg shadow-black/30">
            <div className="w-8 h-8 mb-1 mx-auto">
              <img src="/src/assets/sm5.jpg" alt="Chat" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
            </div>
            <div className="text-sm font-medium">Chat with Maya</div>
          </button>
          <button className="p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors shadow-lg shadow-black/30">
            <div className="w-8 h-8 mb-1 mx-auto">
              <img src="/src/assets/sm7.jpg" alt="Call" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
            </div>
            <div className="text-sm font-medium">Call Sponsor</div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderQuests = () => (
    <div className="space-y-6">
      <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl shadow-black/50 relative overflow-hidden">
        {/* Terrifying Monster decoration */}
        <div className="absolute top-2 right-2 w-12 h-12 opacity-20">
          <img src="/src/assets/sm1.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
        </div>
        
        <h2 className="text-xl font-bold text-gray-100 mb-2 drop-shadow-2xl">Quest Board</h2>
        <p className="text-gray-400 drop-shadow-lg">Complete micro-tasks to earn points and build healthy habits!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {microTasks.map((task) => (
          <div
            key={task.id}
            className="bg-black/80 backdrop-blur-lg rounded-xl p-4 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-200 shadow-lg shadow-black/50"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10">
                <img src="/src/assets/sm2.jpg" alt="Quest" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-gray-400 drop-shadow-lg" />
                <span className="text-gray-300 font-bold drop-shadow-lg">{task.points}</span>
              </div>
            </div>
            <h4 className="text-gray-200 font-medium mb-1">{task.title}</h4>
            <p className="text-gray-600 text-sm mb-3">{task.duration}</p>
            <button className="w-full bg-gradient-to-r from-gray-700 to-black hover:from-gray-600 hover:to-gray-900 text-gray-200 font-medium py-2 rounded-lg transition-all duration-200 shadow-lg shadow-black/50 border border-gray-600/50">
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
      <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-2 mb-8 border border-gray-700/50 shadow-2xl shadow-black/50">
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
                    ? 'bg-gradient-to-r from-gray-700 to-black text-gray-200 shadow-lg shadow-black/50 border border-gray-600/50'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/30 hover:border-gray-600/50'
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