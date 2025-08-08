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
      color: 'from-red-500 to-orange-500',
      position: { top: '20%', left: '15%' },
      completed: false
    },
    {
      id: 'motivation-mountains',
      name: 'Motivation Mountains',
      description: 'Climb to new heights of determination',
      difficulty: 'Medium',
      color: 'from-blue-500 to-purple-500',
      position: { top: '30%', left: '60%' },
      completed: true
    },
    {
      id: 'relapse-ruins',
      name: 'Relapse Ruins',
      description: 'Navigate the dangerous ruins of past mistakes',
      difficulty: 'Expert',
      color: 'from-gray-600 to-gray-800',
      position: { top: '60%', left: '30%' },
      completed: false
    },
    {
      id: 'victory-valley',
      name: 'Victory Valley',
      description: 'The peaceful valley of lasting success',
      difficulty: 'Easy',
      color: 'from-green-400 to-emerald-500',
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
      <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 shadow-2xl shadow-purple-500/20 relative overflow-hidden">
        {/* Monster decoration */}
        <div className="absolute top-2 right-2 text-4xl opacity-10">👹</div>
        <div className="absolute bottom-2 left-2 text-3xl opacity-5">🐉</div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
              <Sword className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white drop-shadow-lg">Smoke Slayer Alex</h2>
              <p className="text-cyan-300">Level 12 • Quit Warrior</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 text-yellow-300 mb-2 drop-shadow-lg">
              <Coins className="w-5 h-5" />
              <span className="text-xl font-bold">2,450</span>
            </div>
            <div className="flex items-center space-x-2 text-cyan-300 drop-shadow-lg">
              <Zap className="w-5 h-5" />
              <span className="text-lg">850 XP</span>
            </div>
          </div>
        </div>

        {/* Health/Streak Bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-white font-medium flex items-center">
              <Heart className="w-4 h-4 mr-2 text-pink-400 drop-shadow-lg" />
              Clean Streak
            </span>
            <span className="text-green-300 font-bold drop-shadow-lg">18 Days</span>
          </div>
          <div className="w-full bg-gray-800/50 rounded-full h-3 border border-gray-600/30">
            <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-3 rounded-full shadow-lg shadow-green-400/30" style={{ width: '72%' }}></div>
          </div>
          <p className="text-sm text-gray-400">7 days until next milestone!</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Adventure Map */}
        <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 relative overflow-hidden">
          {/* Monster decorations */}
          <div className="absolute top-1 right-1 text-2xl opacity-10">👾</div>
          <div className="absolute bottom-1 left-1 text-2xl opacity-5">🧛</div>
          
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-cyan-400 drop-shadow-lg" />
            Adventure Map
          </h3>
          
          <div className="relative h-80 bg-black/60 rounded-xl overflow-hidden border border-purple-500/20">
            {/* Mystical background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-300/50"></div>
              <div className="absolute top-12 right-8 w-4 h-4 bg-pink-300 rounded-full animate-pulse delay-1000 shadow-lg shadow-pink-300/50"></div>
              <div className="absolute bottom-8 left-12 w-6 h-6 bg-cyan-300 rounded-full animate-pulse delay-2000 shadow-lg shadow-cyan-300/50"></div>
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
                  region.completed ? 'border-yellow-400' : 'border-white/30'
                } shadow-lg`} style={{ boxShadow: region.completed ? '0 0 20px rgba(250, 204, 21, 0.5)' : '0 0 10px rgba(147, 51, 234, 0.3)' }}>
                  {region.completed ? (
                    <Trophy className="w-6 h-6 text-yellow-200" />
                  ) : (
                    <MapPin className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className="mt-2 text-xs text-white text-center font-medium bg-black/70 px-2 py-1 rounded border border-white/20">
                  {region.name}
                </div>
              </button>
            ))}

            {/* Selected Region Info */}
            {selectedRegion && (
              <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-lg rounded-lg p-4 border border-purple-500/30 shadow-2xl">
                {(() => {
                  const region = regions.find(r => r.id === selectedRegion);
                  return region ? (
                    <div>
                      <h4 className="text-white font-bold">{region.name}</h4>
                      <p className="text-gray-300 text-sm">{region.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          region.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                          region.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                          region.difficulty === 'Hard' ? 'bg-orange-500/20 text-orange-300' :
                          'bg-red-500/20 text-red-300'
                        }`}>
                          {region.difficulty}
                        </span>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm transition-colors shadow-lg shadow-purple-500/30">
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
        <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 relative overflow-hidden">
          {/* Monster decorations */}
          <div className="absolute top-2 right-2 text-3xl opacity-10">👺</div>
          <div className="absolute bottom-2 left-2 text-2xl opacity-5">🧟</div>
          
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-300 drop-shadow-lg" />
            Daily Quests
          </h3>
          
          <div className="space-y-3">
            {quests.map((quest) => (
              <div
                key={quest.id}
                className={`p-4 rounded-lg border transition-all duration-200 ${
                  quest.completed
                    ? 'bg-green-500/20 border-green-500/30 shadow-lg shadow-green-500/20'
                    : 'bg-black/40 border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      quest.completed ? 'bg-green-500 shadow-lg shadow-green-500/50' : 'bg-gray-700'
                    } border border-white/20`}>
                      {quest.completed ? (
                        <Trophy className="w-4 h-4 text-white" />
                      ) : (
                        <Shield className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div>
                      <h4 className={`font-medium ${quest.completed ? 'text-green-400' : 'text-white'}`}>
                        {quest.title}
                      </h4>
                      <p className="text-xs text-gray-500 capitalize">{quest.type} Quest</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coins className="w-4 h-4 text-yellow-300 drop-shadow-lg" />
                    <span className="text-yellow-300 font-bold drop-shadow-lg">{quest.reward}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-2xl shadow-purple-500/30 border border-purple-400/30">
            Claim All Rewards
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdventureMode;