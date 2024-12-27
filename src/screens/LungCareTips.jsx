
// src/screens/TipsScreen.jsx
import React from 'react';
import { Heart, Shield, CheckCircle, ChevronRight } from 'lucide-react';

const LungCareTips = ({ onNavigate }) => {
  const tips = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Regular Exercise",
      description: "Engage in moderate aerobic activity for at least 30 minutes daily to improve lung capacity.",
      color: "bg-rose-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Avoid Pollutants",
      description: "Stay away from secondhand smoke and maintain good indoor air quality.",
      color: "bg-emerald-500"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Deep Breathing",
      description: "Practice deep breathing exercises to strengthen your lungs and reduce stress.",
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center text-slate-600 hover:text-blue-600 transition-colors mb-8"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span className="ml-1">Back to Dashboard</span>
        </button>

        <h2 className="text-3xl font-bold text-slate-800 mb-6">Lung Health Tips</h2>

        <div className="grid gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className={`${tip.color} text-white p-3 rounded-xl`}>
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{tip.title}</h3>
                  <p className="text-slate-600">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-4">Need personalized advice?</h3>
          <p className="text-blue-100 mb-6">
            Connect with our medical experts for customized lung health recommendations.
          </p>
          <button
            onClick={() => onNavigate('doctors')}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Find a Specialist
          </button>
        </div>
      </div>
    </div>
  );
};

export default LungCareTips;
