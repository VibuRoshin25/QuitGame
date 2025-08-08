import React, { useState } from 'react';
import { Gamepad2, Users, Heart, Watch, BarChart3 } from 'lucide-react';
import AdventureMode from './components/AdventureMode';
import CompetitiveMode from './components/CompetitiveMode';
import CompanionApp from './components/CompanionApp';
import SponsorView from './components/SponsorView';
import WearableView from './components/WearableView';
import EcosystemView from './components/EcosystemView';

type ViewType = 'adventure' | 'competitive' | 'companion' | 'sponsor' | 'wearable' | 'ecosystem';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('adventure');

  // Monster background elements
  const monsters = [
    { id: 1, emoji: '👹', x: '10%', y: '20%', size: 'text-6xl', opacity: 'opacity-10' },
    { id: 2, emoji: '👺', x: '85%', y: '15%', size: 'text-5xl', opacity: 'opacity-5' },
    { id: 3, emoji: '🐉', x: '15%', y: '70%', size: 'text-7xl', opacity: 'opacity-10' },
    { id: 4, emoji: '👾', x: '90%', y: '60%', size: 'text-4xl', opacity: 'opacity-15' },
    { id: 5, emoji: '🦹', x: '5%', y: '45%', size: 'text-5xl', opacity: 'opacity-5' },
    { id: 6, emoji: '🧛', x: '95%', y: '35%', size: 'text-6xl', opacity: 'opacity-10' },
    { id: 7, emoji: '🧟', x: '25%', y: '85%', size: 'text-5xl', opacity: 'opacity-5' },
    { id: 8, emoji: '👻', x: '75%', y: '80%', size: 'text-6xl', opacity: 'opacity-10' }
  ];

  const views = [
    { id: 'adventure', label: 'Adventure Mode', icon: Gamepad2, color: 'from-purple-500 to-pink-500' },
    { id: 'competitive', label: 'Competitive Mode', icon: BarChart3, color: 'from-orange-500 to-red-500' },
    { id: 'companion', label: 'Companion App', icon: Heart, color: 'from-green-400 to-blue-500' },
    { id: 'sponsor', label: 'Sponsor View', icon: Users, color: 'from-blue-400 to-purple-500' },
    { id: 'wearable', label: 'Wearable Device', icon: Watch, color: 'from-teal-400 to-cyan-500' },
    { id: 'ecosystem', label: 'Ecosystem Overview', icon: BarChart3, color: 'from-indigo-500 to-purple-600' }
  ];

  const renderCurrentView = () => {
    switch (currentView) {
      case 'adventure':
        return <AdventureMode />;
      case 'competitive':
        return <CompetitiveMode />;
      case 'companion':
        return <CompanionApp />;
      case 'sponsor':
        return <SponsorView />;
      case 'wearable':
        return <WearableView />;
      case 'ecosystem':
        return <EcosystemView />;
      default:
        return <AdventureMode />;
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Monster Background */}
      <div className="fixed inset-0 pointer-events-none">
        {monsters.map((monster) => (
          <div
            key={monster.id}
            className={`absolute ${monster.size} ${monster.opacity} animate-pulse`}
            style={{ 
              left: monster.x, 
              top: monster.y,
              animationDelay: `${monster.id * 0.5}s`,
              animationDuration: `${3 + monster.id}s`
            }}
          >
            {monster.emoji}
          </div>
        ))}
        
        {/* Neon glow effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-black/80 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">Quit Game</h1>
              <span className="text-sm text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                Prototype System
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* View Selector */}
      <div className="relative z-10 bg-black/60 backdrop-blur-sm border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 py-4 overflow-x-auto">
            {views.map((view) => {
              const Icon = view.icon;
              return (
                <button
                  key={view.id}
                  onClick={() => setCurrentView(view.id as ViewType)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                    currentView === view.id
                      ? `bg-gradient-to-r ${view.color} text-white shadow-lg shadow-purple-500/30 border border-white/20`
                      : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-cyan-500/30'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{view.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentView()}
      </main>
    </div>
  );
}

export default App;