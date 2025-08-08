import React, { useState } from 'react';
import { ArrowRight, Gamepad2, Heart, Users, Watch, MessageCircle, Zap, Gift, TrendingUp } from 'lucide-react';

const EcosystemView = () => {
  const [activeFlow, setActiveFlow] = useState<string | null>(null);

  const components = [
    {
      id: 'wearable',
      name: 'Wearable Device',
      icon: Watch,
      color: 'from-teal-400 to-cyan-500',
      description: 'Detects nicotine exposure',
      emoji: '⌚'
    },
    {
      id: 'game',
      name: 'Game App',
      icon: Gamepad2,
      color: 'from-purple-500 to-pink-500',
      description: 'Adventure & competitive modes',
      emoji: '🎮'
    },
    {
      id: 'companion',
      name: 'Companion App',
      icon: Heart,
      color: 'from-green-400 to-blue-500',
      description: 'Daily tracking & AI coach',
      emoji: '💚'
    },
    {
      id: 'sponsor',
      name: 'Sponsor View',
      icon: Users,
      color: 'from-blue-400 to-purple-500',
      description: 'Support network dashboard',
      emoji: '👥'
    },
    {
      id: 'coach',
      name: 'AI Coach',
      icon: MessageCircle,
      color: 'from-indigo-500 to-purple-600',
      description: 'Personalized guidance',
      emoji: '🤖'
    }
  ];

  const flows = [
    {
      id: 'detection',
      title: 'Nicotine Detection Flow',
      steps: [
        { from: 'wearable', to: 'game', action: 'Detects nicotine', result: 'Triggers game consequences' },
        { from: 'game', to: 'companion', action: 'Updates streak', result: 'Logs in companion app' },
        { from: 'companion', to: 'sponsor', action: 'Sends alert', result: 'Notifies support network' }
      ]
    },
    {
      id: 'craving',
      title: 'Craving Support Flow',
      steps: [
        { from: 'companion', to: 'coach', action: 'User logs craving', result: 'AI suggests coping strategy' },
        { from: 'coach', to: 'game', action: 'Recommends activity', result: 'Offers distraction quest' },
        { from: 'companion', to: 'sponsor', action: 'Escalates if needed', result: 'Alerts support person' }
      ]
    },
    {
      id: 'reward',
      title: 'Achievement Flow',
      steps: [
        { from: 'game', to: 'companion', action: 'Milestone reached', result: 'Unlocks new content' },
        { from: 'companion', to: 'coach', action: 'Progress update', result: 'Celebrates achievement' },
        { from: 'sponsor', to: 'game', action: 'Sends encouragement', result: 'Player gains bonus rewards' }
      ]
    }
  ];

  const milestones = [
    { day: 1, title: 'First Day', reward: 'Welcome badge', color: 'bg-blue-500' },
    { day: 3, title: 'Three Days', reward: 'Determination shield', color: 'bg-green-500' },
    { day: 7, title: 'One Week', reward: 'Week warrior title', color: 'bg-purple-500' },
    { day: 14, title: 'Two Weeks', reward: 'Fortnight champion', color: 'bg-orange-500' },
    { day: 21, title: 'Three Weeks', reward: 'Habit breaker crown', color: 'bg-pink-500' },
    { day: 30, title: 'One Month', reward: 'Monthly master', color: 'bg-yellow-500' }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Quit Game Ecosystem</h1>
        <p className="text-indigo-300 text-lg">A comprehensive gamified smoking cessation system</p>
      </div>

      {/* Components Overview */}
      <div className="grid md:grid-cols-5 gap-4">
        {components.map((component) => {
          const Icon = component.icon;
          return (
            <div
              key={component.id}
              className={`bg-gradient-to-br ${component.color}/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center hover:scale-105 transition-all duration-200 cursor-pointer`}
              onClick={() => setActiveFlow(activeFlow === component.id ? null : component.id)}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${component.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">{component.name}</h3>
              <p className="text-gray-300 text-sm">{component.description}</p>
              <div className="text-3xl mt-3">{component.emoji}</div>
            </div>
          );
        })}
      </div>

      {/* Flow Visualization */}
      <div className="bg-gradient-to-br from-gray-900/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-500/20">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">System Flows</h2>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {flows.map((flow) => (
            <div
              key={flow.id}
              className="bg-black/30 rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                {flow.title}
              </h3>
              
              <div className="space-y-4">
                {flow.steps.map((step, index) => {
                  const fromComponent = components.find(c => c.id === step.from);
                  const toComponent = components.find(c => c.id === step.to);
                  
                  return (
                    <div key={index} className="relative">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{fromComponent?.emoji}</div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <div className="text-2xl">{toComponent?.emoji}</div>
                      </div>
                      <div className="mt-2 ml-2">
                        <p className="text-blue-400 text-sm font-medium">{step.action}</p>
                        <p className="text-gray-400 text-xs">{step.result}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Journey Milestones */}
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
        <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
          <TrendingUp className="w-6 h-6 mr-2 text-purple-400" />
          Journey Milestones
        </h2>
        
        <div className="relative">
          {/* Progress Path */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-6 gap-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center relative">
                <div className={`w-12 h-12 ${milestone.color} rounded-full flex items-center justify-center mx-auto mb-3 border-4 border-white relative z-10`}>
                  <span className="text-white font-bold text-sm">{milestone.day}</span>
                </div>
                <h4 className="text-white font-medium text-sm mb-1">{milestone.title}</h4>
                <p className="text-gray-400 text-xs">{milestone.reward}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20 text-center">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Watch className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-white font-bold mb-2">Real-time Detection</h3>
          <p className="text-gray-300 text-sm">Wearable devices monitor nicotine exposure 24/7</p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 text-center">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-white font-bold mb-2">Gamified Experience</h3>
          <p className="text-gray-300 text-sm">Adventure and competitive modes keep users engaged</p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 text-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-white font-bold mb-2">Social Support</h3>
          <p className="text-gray-300 text-sm">Connect with sponsors and support networks</p>
        </div>

        <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/20 text-center">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-white font-bold mb-2">AI Coaching</h3>
          <p className="text-gray-300 text-sm">Personalized guidance and coping strategies</p>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/20">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Expected Outcomes</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">85%</div>
            <p className="text-gray-300">User Engagement</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
            <p className="text-gray-300">30-Day Success Rate</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
            <p className="text-gray-300">Long-term Quit Rate</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
            <p className="text-gray-300">User Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemView;