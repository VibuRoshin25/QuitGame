import React, { useState } from 'react';
import { MapPin, Star, Coins, Zap, Trophy, Sword, Shield, Heart } from 'lucide-react';

const AdventureMode = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    {
      id: 'craving-cliffs',
      name: 'Craving Cliffs',
      description: 'Overcome the treacherous peaks of temptation',
      difficulty: 'Hard',
      color: 'from-gray-700 to-gray-900',
      position: { top: '20%', left: '15%' },
      completed: false
    },
    {
      id: 'motivation-mountains',
      name: 'Motivation Mountains',
      description: 'Climb to new heights of determination',
      difficulty: 'Medium',
      color: 'from-gray-600 to-gray-800',
      position: { top: '30%', left: '60%' },
      completed: true
    },
    {
      id: 'relapse-ruins',
      name: 'Relapse Ruins',
      description: 'Navigate the dangerous ruins of past mistakes',
      difficulty: 'Expert',
      color: 'from-black to-gray-900',
      position: { top: '60%', left: '30%' },
      completed: false
    },
    {
      id: 'victory-valley',
      name: 'Victory Valley',
      description: 'The peaceful valley of lasting success',
      difficulty: 'Easy',
      color: 'from-gray-500 to-gray-700',
      position: { top: '70%', left: '70%' },
      completed: false
    }
  ];

  const quests = [
    { id: 1, title: 'Morning Meditation', reward: 50, type: 'daily', completed: false },
    { id: 2, title: '24-Hour Streak', reward: 100, type: 'streak', completed: true },
    { id: 3, title: 'Resist 3 Cravings', reward: 75, type: 'challenge', completed: false },
    { id: 4, title: 'Help a Friend', reward: 25, type: 'social', completed: false }
  ];

  return (
    <div className="space-y-8">
      {/* Player Stats */}
      <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl shadow-black/50 relative overflow-hidden">
        {/* Terrifying Monster decoration */}
        <div className="absolute top-2 right-2 w-16 h-16 opacity-20">
          <img src="/src/assets/sm1.jpg" alt="Monster" className="w-full h-full object-cover rounded-lg filter grayscale contrast-125" />
        </div>
        <div className="absolute bottom-2 left-2 w-12 h-12 opacity-15">
          <img src="/src/assets/sm2.jpg" alt="Monster" className="w-full h-full object-cover rounded-lg filter grayscale contrast-125" />
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center shadow-lg shadow-black/50 border border-gray-600">
              <Sword className="w-8 h-8 text-gray-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-100 drop-shadow-2xl">Smoke Slayer Alex</h2>
              <p className="text-gray-400">Level 12 • Quit Warrior</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 text-gray-300 mb-2 drop-shadow-lg">
              <Coins className="w-5 h-5" />
              <span className="text-xl font-bold">2,450</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 drop-shadow-lg">
              <Zap className="w-5 h-5" />
              <span className="text-lg">850 XP</span>
            </div>
          </div>
        </div>

        {/* Health/Streak Bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-200 font-medium flex items-center">
              <Heart className="w-4 h-4 mr-2 text-gray-400 drop-shadow-lg" />
              Clean Streak
            </span>
            <span className="text-gray-300 font-bold drop-shadow-lg">18 Days</span>
          </div>
          <div className="w-full bg-gray-900/80 rounded-full h-3 border border-gray-700/50">
            <div className="bg-gradient-to-r from-gray-500 to-gray-300 h-3 rounded-full shadow-lg shadow-gray-500/30" style={{ width: '72%' }}></div>
          </div>
          <p className="text-sm text-gray-500">7 days until next milestone!</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Adventure Map */}
        <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl shadow-black/50 relative overflow-hidden">
          {/* Terrifying Monster decorations */}
          <div className="absolute top-1 right-1 w-8 h-8 opacity-20">
            <img src="/src/assets/sm5.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
          </div>
          <div className="absolute bottom-1 left-1 w-8 h-8 opacity-15">
            <img src="/src/assets/sm7.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
          </div>
          
          <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-gray-400 drop-shadow-lg" />
            Adventure Map
          </h3>
          
          <div className="relative h-80 bg-black/80 rounded-xl overflow-hidden border border-gray-700/30">
            {/* Dark atmospheric background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-8 h-8 bg-gray-600 rounded-full animate-pulse shadow-lg shadow-gray-600/50"></div>
              <div className="absolute top-12 right-8 w-4 h-4 bg-gray-500 rounded-full animate-pulse delay-1000 shadow-lg shadow-gray-500/50"></div>
              <div className="absolute bottom-8 left-12 w-6 h-6 bg-gray-400 rounded-full animate-pulse delay-2000 shadow-lg shadow-gray-400/50"></div>
            </div>

            {/* Regions */}
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  selectedRegion === region.id ? 'scale-110' : 'hover:scale-105'
                }`}
                style={{ top: region.position.top, left: region.position.left }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${region.color} rounded-full flex items-center justify-center shadow-lg border-2 ${
                  region.completed ? 'border-gray-300' : 'border-gray-600/50'
                } shadow-lg`} style={{ boxShadow: region.completed ? '0 0 20px rgba(156, 163, 175, 0.5)' : '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                  {region.completed ? (
                    <Trophy className="w-6 h-6 text-gray-200" />
                  ) : (
                    <MapPin className="w-6 h-6 text-gray-300" />
                  )}
                </div>
                <div className="mt-2 text-xs text-gray-200 text-center font-medium bg-black/80 px-2 py-1 rounded border border-gray-600/30">
                  {region.name}
                </div>
              </button>
            ))}

            {/* Selected Region Info */}
            {selectedRegion && (
              <div className="absolute bottom-4 left-4 right-4 bg-black/95 backdrop-blur-lg rounded-lg p-4 border border-gray-700/50 shadow-2xl">
                {(() => {
                  const region = regions.find(r => r.id === selectedRegion);
                  return region ? (
                    <div>
                      <h4 className="text-gray-100 font-bold">{region.name}</h4>
                      <p className="text-gray-400 text-sm">{region.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          region.difficulty === 'Easy' ? 'bg-gray-700/50 text-gray-300' :
                          region.difficulty === 'Medium' ? 'bg-gray-800/50 text-gray-400' :
                          region.difficulty === 'Hard' ? 'bg-gray-900/50 text-gray-500' :
                          'bg-black/50 text-gray-600'
                        }`}>
                          {region.difficulty}
                        </span>
                        <button className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-3 py-1 rounded text-sm transition-colors shadow-lg shadow-black/50 border border-gray-600">
                          {region.completed ? 'Replay' : 'Enter'}
                        </button>
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            )}
          </div>
        </div>

        {/* Quest Board */}
        <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl shadow-black/50 relative overflow-hidden">
          {/* Terrifying Monster decorations */}
          <div className="absolute top-2 right-2 w-12 h-12 opacity-20">
            <img src="/src/assets/sm1.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
          </div>
          <div className="absolute bottom-2 left-2 w-8 h-8 opacity-15">
            <img src="/src/assets/sm5.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
          </div>
          
          <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
            <Star className="w-5 h-5 mr-2 text-gray-400 drop-shadow-lg" />
            Daily Quests
          </h3>
          
          <div className="space-y-3">
            {quests.map((quest) => (
              <div
                key={quest.id}
                className={`p-4 rounded-lg border transition-all duration-200 ${
                  quest.completed
                    ? 'bg-gray-800/50 border-gray-600/50 shadow-lg shadow-black/30'
                    : 'bg-black/60 border-gray-700/30 hover:border-gray-600/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      quest.completed ? 'bg-gray-600 shadow-lg shadow-black/50' : 'bg-gray-800'
                    } border border-gray-600/50`}>
                      {quest.completed ? (
                        <Trophy className="w-4 h-4 text-gray-200" />
                      ) : (
                        <Shield className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h4 className={`font-medium ${quest.completed ? 'text-gray-300' : 'text-gray-200'}`}>
                        {quest.title}
                      </h4>
                      <p className="text-xs text-gray-600 capitalize">{quest.type} Quest</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coins className="w-4 h-4 text-gray-400 drop-shadow-lg" />
                    <span className="text-gray-300 font-bold drop-shadow-lg">{quest.reward}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 bg-gradient-to-r from-gray-700 to-black hover:from-gray-600 hover:to-gray-900 text-gray-200 font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-2xl shadow-black/50 border border-gray-600/50">
            Claim All Rewards
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdventureMode;