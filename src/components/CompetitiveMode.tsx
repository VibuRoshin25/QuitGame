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
      <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl shadow-black/50 relative overflow-hidden">
        {/* Terrifying Monster decorations */}
        <div className="absolute top-2 right-2 w-16 h-16 opacity-20">
          <img src="/src/assets/sm1.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
        </div>
        <div className="absolute bottom-2 left-2 w-12 h-12 opacity-15">
          <img src="/src/assets/sm2.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-black/50 border border-gray-600">
              <Flame className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-100 drop-shadow-2xl">21</h3>
            <p className="text-gray-400 drop-shadow-lg">Day Streak</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-black/50 border border-gray-600">
              <DollarSign className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-100 drop-shadow-2xl">$150</h3>
            <p className="text-gray-400 drop-shadow-lg">At Stake</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-black/50 border border-gray-600">
              <Trophy className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-100 drop-shadow-2xl">#3</h3>
            <p className="text-gray-400 drop-shadow-lg">Rank</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-black rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-black/50 border border-gray-600">
              <Clock className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-100 drop-shadow-2xl">{formatTime(timeLeft)}</h3>
            <p className="text-gray-400 drop-shadow-lg">Next Challenge</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Leaderboard */}
        <div className="lg:col-span-2 bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl shadow-black/50 relative overflow-hidden">
          {/* Terrifying Monster decorations */}
          <div className="absolute top-1 right-1 w-12 h-12 opacity-20">
            <img src="/src/assets/sm5.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
          </div>
          <div className="absolute bottom-1 left-1 w-8 h-8 opacity-15">
            <img src="/src/assets/sm7.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-100 flex items-center">
              <Crown className="w-5 h-5 mr-2 text-gray-400 drop-shadow-lg" />
              Live Leaderboard
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse shadow-lg shadow-gray-400/50"></div>
              <span>Live</span>
            </div>
          </div>

          <div className="space-y-3">
            {leaderboard.map((player, index) => (
              <div
                key={player.id}
                className={`p-4 rounded-lg border transition-all duration-200 ${
                  player.name === 'You'
                    ? 'bg-gray-800/50 border-gray-600/50 ring-2 ring-gray-600/30 shadow-lg shadow-black/30'
                    : 'bg-black/60 border-gray-700/30 hover:border-gray-600/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? 'bg-gray-300 text-black' :
                      index === 1 ? 'bg-gray-500 text-white' :
                      index === 2 ? 'bg-gray-600 text-white' :
                      'bg-gray-700 text-white'
                    }`}>
                      {player.rank}
                    </div>
                    <div className="w-8 h-8">
                      <img src="/src/assets/sm2.jpg" alt="Player" className="w-full h-full object-cover rounded-full filter grayscale contrast-125" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-200">{player.name}</h4>
                      <div className="flex items-center space-x-3 text-sm">
                        <span className="text-gray-400 flex items-center">
                          <Flame className="w-3 h-3 mr-1" />
                          {player.streak} days
                        </span>
                        <span className="text-gray-300 flex items-center">
                          <DollarSign className="w-3 h-3 mr-1" />
                          ${player.stake}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {player.trend === 'up' && <TrendingUp className="w-4 h-4 text-gray-400" />}
                    {player.trend === 'down' && <TrendingUp className="w-4 h-4 text-gray-500 rotate-180" />}
                    {player.trend === 'same' && <Target className="w-4 h-4 text-gray-500" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Live Updates */}
          <div className="mt-6 p-4 bg-black/80 rounded-lg border border-gray-700/30">
            <h4 className="text-gray-200 font-medium mb-3 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-gray-400 drop-shadow-lg" />
              Live Updates
            </h4>
            <div className="space-y-2 text-sm">
              <div className="text-gray-300 drop-shadow-lg">Sarah M. just hit 45 days! +$50 bonus!</div>
              <div className="text-gray-400 drop-shadow-lg">You moved up to rank #3!</div>
              <div className="text-gray-500 drop-shadow-lg">Mike R. completed a challenge! +25 points</div>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Current Challenge */}
          <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl shadow-black/50 relative overflow-hidden">
            {/* Terrifying Monster decoration */}
            <div className="absolute top-1 right-1 w-8 h-8 opacity-15">
              <img src="/src/assets/sm1.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
            </div>
            
            <h3 className="text-lg font-bold text-gray-100 mb-4">Current Challenge</h3>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-black/50 border border-gray-600">
                <Target className="w-10 h-10 text-gray-300" />
              </div>
              <h4 className="text-gray-200 font-bold mb-2">Weekend Warrior</h4>
              <p className="text-gray-500 text-sm mb-4">Stay clean for the entire weekend</p>
              <div className="bg-black/80 rounded-lg p-3 mb-4 border border-gray-700/30">
                <div className="text-2xl font-bold text-gray-100 drop-shadow-2xl">{formatTime(timeLeft)}</div>
                <div className="text-sm text-gray-600">Time Remaining</div>
              </div>
              <button className="w-full bg-gradient-to-r from-gray-700 to-black hover:from-gray-600 hover:to-gray-900 text-gray-200 font-bold py-2 rounded-lg transition-all duration-200 shadow-lg shadow-black/50 border border-gray-600/50">
                Join Challenge
              </button>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl shadow-black/50 relative overflow-hidden">
            {/* Terrifying Monster decoration */}
            <div className="absolute bottom-1 right-1 w-8 h-8 opacity-15">
              <img src="/src/assets/sm5.jpg" alt="Monster" className="w-full h-full object-cover rounded filter grayscale contrast-125" />
            </div>
            
            <h3 className="text-lg font-bold text-gray-100 mb-4">Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    achievement.unlocked
                      ? 'bg-gray-800/50 border-gray-600/50 shadow-lg shadow-black/30'
                      : 'bg-black/60 border-gray-700/30'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.unlocked ? 'bg-gray-600 shadow-lg shadow-black/50' : 'bg-gray-800'
                    } border border-gray-600/50`}>
                      <Trophy className="w-4 h-4 text-gray-200" />
                    </div>
                    <div>
                      <h4 className={`font-medium text-sm ${
                        achievement.unlocked ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-gray-700">{achievement.description}</p>
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