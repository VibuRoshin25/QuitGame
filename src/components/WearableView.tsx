import React, { useState } from 'react';
import { Bluetooth, Battery, Wifi, CheckCircle, AlertTriangle, Smartphone } from 'lucide-react';

const WearableView = () => {
  const [selectedDevice, setSelectedDevice] = useState<'bracelet' | 'badge' | 'pendant'>('bracelet');
  const [isConnected, setIsConnected] = useState(true);

  const devices = [
    {
      id: 'bracelet',
      name: 'QuitBand Pro',
      type: 'Smart Bracelet',
      description: 'Sleek black bracelet with glowing teal light strip',
      features: ['Air sensor', 'Heart rate', '7-day battery', 'Waterproof'],
      image: '⌚'
    },
    {
      id: 'badge',
      name: 'QuitClip Mini',
      type: 'Lapel Badge',
      description: 'Discreet rounded rectangle with magnetic mount',
      features: ['Ultra-portable', 'Magnetic clip', '14-day battery', 'Silent alerts'],
      image: '📎'
    },
    {
      id: 'pendant',
      name: 'QuitGem',
      type: 'Smart Pendant',
      description: 'Futuristic gem-like pendant necklace',
      features: ['Elegant design', 'LED indicators', '10-day battery', 'Adjustable chain'],
      image: '💎'
    }
  ];

  const currentDevice = devices.find(d => d.id === selectedDevice);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-900/50 to-cyan-900/50 backdrop-blur-lg rounded-2xl p-6 border border-teal-500/20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Nicotine-Aware Wearables</h1>
            <p className="text-teal-300">Discreet, stylish devices that detect nicotine exposure</p>
          </div>
          <div className="text-6xl">🔬</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Device Selection */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Choose Your Device</h3>
          {devices.map((device) => (
            <button
              key={device.id}
              onClick={() => setSelectedDevice(device.id as any)}
              className={`w-full p-4 rounded-xl border transition-all duration-200 text-left ${
                selectedDevice === device.id
                  ? 'bg-teal-500/20 border-teal-500/30 ring-2 ring-teal-500/20'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="text-2xl">{device.image}</div>
                <div>
                  <h4 className="text-white font-medium">{device.name}</h4>
                  <p className="text-gray-400 text-sm">{device.type}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">{device.description}</p>
            </button>
          ))}
        </div>

        {/* Device Visualization */}
        <div className="bg-gradient-to-br from-gray-900/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-500/20">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
              <div className="text-6xl">{currentDevice?.image}</div>
              {isConnected && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Bluetooth className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{currentDevice?.name}</h3>
            <p className="text-gray-400 mb-4">{currentDevice?.description}</p>
            
            {/* Status Indicators */}
            <div className="space-y-3 mb-6">
              <div className={`flex items-center justify-center space-x-2 p-2 rounded-lg ${
                isConnected ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}>
                <Bluetooth className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {isConnected ? 'Connected' : 'Disconnected'}
                </span>
              </div>
              
              <div className="flex items-center justify-center space-x-2 p-2 rounded-lg bg-green-500/20 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">🟢 No nicotine detected today!</span>
              </div>
            </div>

            {/* Device Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-3">
                <Battery className="w-5 h-5 text-green-400 mx-auto mb-1" />
                <div className="text-white font-bold">87%</div>
                <div className="text-xs text-gray-400">Battery</div>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <Wifi className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                <div className="text-white font-bold">Strong</div>
                <div className="text-xs text-gray-400">Signal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Sync */}
        <div className="space-y-6">
          {/* Features */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-white mb-4">Features</h3>
            <div className="space-y-3">
              {currentDevice?.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* App Sync */}
          <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Smartphone className="w-5 h-5 mr-2 text-blue-400" />
              App Sync
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                <span className="text-white text-sm">Bluetooth Pairing</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Active</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                <span className="text-white text-sm">Data Sync</span>
                <span className="text-blue-400 text-sm">Real-time</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                <span className="text-white text-sm">Last Reading</span>
                <span className="text-gray-400 text-sm">2 min ago</span>
              </div>
            </div>

            <button 
              onClick={() => setIsConnected(!isConnected)}
              className={`w-full mt-4 font-medium py-2 rounded-lg transition-all duration-200 ${
                isConnected 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isConnected ? 'Disconnect' : 'Connect Device'}
            </button>
          </div>

          {/* Alerts */}
          <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
              Smart Alerts
            </h3>
            
            <div className="space-y-3">
              <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-medium text-sm">Clean Day</span>
                </div>
                <p className="text-gray-300 text-xs">No nicotine detected for 24 hours</p>
              </div>
              
              <div className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <Bluetooth className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 font-medium text-sm">Game Sync</span>
                </div>
                <p className="text-gray-300 text-xs">Progress automatically updated in app</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specs */}
      <div className="bg-gradient-to-br from-gray-900/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-500/20">
        <h3 className="text-lg font-bold text-white mb-4">Technical Specifications</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-white font-medium mb-2">Sensor Technology</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Advanced air quality sensor</li>
              <li>• Nicotine detection accuracy: 95%+</li>
              <li>• Real-time monitoring</li>
              <li>• Environmental compensation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Connectivity</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Bluetooth 5.0 LE</li>
              <li>• 30ft range</li>
              <li>• Automatic sync</li>
              <li>• Encrypted data transfer</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Design</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Minimalist aesthetic</li>
              <li>• Gender-neutral design</li>
              <li>• Premium materials</li>
              <li>• Comfortable all-day wear</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WearableView;