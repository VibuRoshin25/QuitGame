import React, { useState } from 'react';
import { Gamepad2, Users, Heart, Watch, BarChart3, Skull } from 'lucide-react';
import AdventureMode from './components/AdventureMode';
import CompetitiveMode from './components/CompetitiveMode';
import CompanionApp from './components/CompanionApp';
import SponsorView from './components/SponsorView';
import WearableView from './components/WearableView';
import EcosystemView from './components/EcosystemView';

type ViewType = 'adventure' | 'competitive' | 'companion' | 'sponsor' | 'wearable' | 'ecosystem';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('adventure');

  // Terrifying monster background elements
  const monsters = [
    { id: 1, image: '/src/assets/sm1.jpg', x: '10%', y: '20%', size: 'w-24 h-24', opacity: 'opacity-20' },
    { id: 2, image: '/src/assets/sm2.jpg', x: '85%', y: '15%', size: 'w-20 h-20', opacity: 'opacity-15' },
    { id: 3, image: '/src/assets/sm5.jpg', x: '15%', y: '70%', size: 'w-32 h-32', opacity: 'opacity-25' },
    { id: 4, image: '/src/assets/sm7.jpg', x: '90%', y: '60%', size: 'w-16 h-16', opacity: 'opacity-30' },
    { id: 5, image: '/src/assets/sm1.jpg', x: '5%', y: '45%', size: 'w-20 h-20', opacity: 'opacity-15' },
    { id: 6, image: '/src/assets/sm2.jpg', x: '95%', y: '35%', size: 'w-24 h-24', opacity: 'opacity-20' },
    { id: 7, image: '/src/assets/sm5.jpg', x: '25%', y: '85%', size: 'w-20 h-20', opacity: 'opacity-15' },
    { id: 8, image: '/src/assets/sm7.jpg', x: '75%', y: '80%', size: 'w-24 h-24', opacity: 'opacity-20' }
  ];

  const views = [
    { id: 'adventure', label: 'Adventure Mode', icon: Gamepad2, color: 'from-gray-700 to-gray-900' },
    { id: 'competitive', label: 'Competitive Mode', icon: BarChart3, color: 'from-gray-800 to-black' },
    { id: 'companion', label: 'Companion App', icon: Heart, color: 'from-gray-600 to-gray-800' },
    { id: 'sponsor', label: 'Sponsor View', icon: Users, color: 'from-gray-700 to-gray-900' },
    { id: 'wearable', label: 'Wearable Device', icon: Watch, color: 'from-gray-800 to-black' },
    { id: 'ecosystem', label: 'Ecosystem Overview', icon: BarChart3, color: 'from-gray-600 to-gray-800' }
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Terrifying Monster Background */}
      <div className="fixed inset-0 pointer-events-none">
        {monsters.map((monster) => (
          <div
            key={monster.id}
            className={`absolute ${monster.size} ${monster.opacity} animate-pulse hover:animate-bounce transition-all duration-1000`}
            style={{ 
              left: monster.x, 
              top: monster.y,
              animationDelay: `${monster.id * 0.8}s`,
              animationDuration: `${4 + monster.id}s`
            }}
          >
            <img 
              src={monster.image} 
              alt="Monster" 
              className="w-full h-full object-cover rounded-lg shadow-2xl shadow-red-900/50 border border-gray-700/30 filter grayscale contrast-125 brightness-75"
            />
          </div>
        ))}
        
        {/* Dark atmospheric effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-black/90 backdrop-blur-lg border-b border-gray-700/50 shadow-2xl shadow-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-black rounded-lg flex items-center justify-center shadow-lg shadow-black/50 border border-gray-600">
                <Skull className="w-6 h-6 text-gray-300" />
              </div>
              <h1 className="text-2xl font-bold text-gray-100 drop-shadow-2xl">Quit Game</h1>
              <span className="text-sm text-gray-300 bg-gray-800/60 px-3 py-1 rounded-full border border-gray-600/50 shadow-lg shadow-black/30">
                Prototype System
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* View Selector */}
      <div className="relative z-10 bg-black/70 backdrop-blur-sm border-b border-gray-700/30">
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
                      ? `bg-gradient-to-r ${view.color} text-gray-100 shadow-lg shadow-black/50 border border-gray-500/50`
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/30 border border-transparent hover:border-gray-600/50'
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