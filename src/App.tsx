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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Quit Game</h1>
              <span className="text-sm text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                Prototype System
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* View Selector */}
      <div className="bg-black/10 backdrop-blur-sm border-b border-white/5">
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
                      ? `bg-gradient-to-r ${view.color} text-white shadow-lg`
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentView()}
      </main>
    </div>
  );
}

export default App;