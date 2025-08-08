import React, { useState, useEffect } from 'react';
import { Trophy, Flame, DollarSign, Clock, Zap, Target, Crown, TrendingUp } from 'lucide-react';

const CompetitiveMode = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const leaderboard = [
    { id: 1, name: 'Sarah M.', avatar: '👩‍💼', streak: 45, stake: 250, rank: 1, trend: 'up' },
    { id: 2, name: 'Mike R.', avatar: '👨‍🔧', streak: 38, stake: 180, rank: 2, trend: 'same' },
    { id: 3, name: 'You', avatar: '🎯', streak: 21, stake: 150, rank: 3, trend: 'up' },
    { id: 4, name: 'Lisa K.', avatar: '👩‍🎨', streak: 19, stake: 120, rank: 4, trend: 'down' },
    { id: 5, name: 'John D.', avatar: '👨‍💻', streak: 15, stake: 100, rank: 5, trend: 'up' }
  ];

  const achievements = [
    { title: 'Week Warrior', description: '7 days clean', unlocked: true },
    { title: 'Money Master', description: '$100+ at stake', unlocked: true },
    { title: 'Streak Slayer', description: '30 day streak', unlocked: false },
    { title: 'Champion', description: 'Top 3 for a week', unlocked: false }
  ];

  return (
    <div className="space-y-8">
      {/* Header Stats */}
      <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30 shadow-2xl shadow-orange-500/20 relative overflow-hidden">
        {/* Monster decorations */}
        <div className="absolute top-2 right-2 text-4xl opacity-10">👹</div>
        <div className="absolute bottom-2 left-2 text-3xl opacity-5">🐉</div>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-orange-500/50">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">21</h3>
            <p className="text-orange-300 drop-shadow-lg">Day Streak</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-green-500/50">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">$150</h3>
            <p className="text-green-300 drop-shadow-lg">At Stake</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-purple-500/50">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">#3</h3>
            <p className="text-purple-300 drop-shadow-lg">Rank</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-cyan-500/50">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">{formatTime(timeLeft)}</h3>
            <p className="text-cyan-300 drop-shadow-lg">Next Challenge</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Leaderboard */}
        <div className="lg:col-span-2 bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-500/30 shadow-2xl shadow-gray-500/20 relative overflow-hidden">
          {/* Monster decorations */}
          <div className="absolute top-1 right-1 text-3xl opacity-10">👾</div>
          <div className="absolute bottom-1 left-1 text-2xl opacity-5">🧛</div>
          
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Crown className="w-5 h-5 mr-2 text-yellow-300 drop-shadow-lg" />
              Live Leaderboard
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse shadow-lg shadow-green-300/50"></div>
              <span>Live</span>
            </div>
          </div>

          <div className="space-y-3">
            {leaderboard.map((player, index) => (
              <div
                key={player.id}
                className={`p-4 rounded-lg border transition-all duration-200 ${
                  player.name === 'You'
                    ? 'bg-blue-500/20 border-blue-500/30 ring-2 ring-blue-500/20 shadow-lg shadow-blue-500/20'
                    : 'bg-black/40 border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? 'bg-yellow-500 text-black' :
                      index === 1 ? 'bg-gray-400 text-black' :
                      index === 2 ? 'bg-orange-500 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {player.rank}
                    </div>
                    <div className="text-2xl">{player.avatar}</div>
                    <div>
                      <h4 className="font-medium text-white">{player.name}</h4>
                      <div className="flex items-center space-x-3 text-sm">
                        <span className="text-orange-400 flex items-center">
                          <Flame className="w-3 h-3 mr-1" />
                          {player.streak} days
                        </span>
                        <span className="text-green-300 flex items-center">
                          <DollarSign className="w-3 h-3 mr-1" />
                          ${player.stake}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {player.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-300" />}
                    {player.trend === 'down' && <TrendingUp className="w-4 h-4 text-red-300 rotate-180" />}
                    {player.trend === 'same' && <Target className="w-4 h-4 text-gray-300" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Live Updates */}
          <div className="mt-6 p-4 bg-black/60 rounded-lg border border-white/10">
            <h4 className="text-white font-medium mb-3 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-yellow-300 drop-shadow-lg" />
              Live Updates
            </h4>
            <div className="space-y-2 text-sm">
              <div className="text-green-300 drop-shadow-lg">💥 Sarah M. just hit 45 days! +$50 bonus!</div>
              <div className="text-cyan-300 drop-shadow-lg">🔥 You moved up to rank #3!</div>
              <div className="text-orange-300 drop-shadow-lg">⚡ Mike R. completed a challenge! +25 points</div>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Current Challenge */}
          <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 shadow-2xl shadow-purple-500/20 relative overflow-hidden">
            {/* Monster decoration */}
            <div className="absolute top-1 right-1 text-2xl opacity-10">👺</div>
            
            <h3 className="text-lg font-bold text-white mb-4">Current Challenge</h3>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/50">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-white font-bold mb-2">Weekend Warrior</h4>
              <p className="text-gray-400 text-sm mb-4">Stay clean for the entire weekend</p>
              <div className="bg-black/60 rounded-lg p-3 mb-4 border border-white/10">
                <div className="text-2xl font-bold text-white drop-shadow-lg">{formatTime(timeLeft)}</div>
                <div className="text-sm text-gray-500">Time Remaining</div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 rounded-lg transition-all duration-200 shadow-lg shadow-purple-500/30 border border-purple-400/30">
                Join Challenge
              </button>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 relative overflow-hidden">
            {/* Monster decoration */}
            <div className="absolute bottom-1 right-1 text-2xl opacity-10">🧟</div>
            
            <h3 className="text-lg font-bold text-white mb-4">Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    achievement.unlocked
                      ? 'bg-yellow-500/20 border-yellow-500/30 shadow-lg shadow-yellow-500/20'
                      : 'bg-gray-800/20 border-gray-600/30'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.unlocked ? 'bg-yellow-500 shadow-lg shadow-yellow-500/50' : 'bg-gray-700'
                    } border border-white/20`}>
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className={`font-medium text-sm ${
                        achievement.unlocked ? 'text-yellow-300' : 'text-gray-500'
                      }`}>
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveMode;