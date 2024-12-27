import React from 'react';
import { ArrowRight, Activity, Shield, Users, Share2 } from 'lucide-react';

const LandingPage = ({ onNavigate }) => {
  const features = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "AI-Powered Analysis",
      description: "Get instant analysis of lung scans using our advanced AI technology",
      color: "bg-blue-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Private",
      description: "Your medical data is protected with enterprise-grade security",
      color: "bg-indigo-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Network",
      description: "Connect with certified lung specialists for professional advice",
      color: "bg-violet-500"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Seamless Sharing",
      description: "Easily share results with your healthcare providers",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">LungAI</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onNavigate('login')}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => onNavigate('signup')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Advanced Lung Health Analysis<br />Powered by AI
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Get instant insights about your lung health using artificial intelligence
              and connect with specialists for professional care.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <button
                onClick={() => onNavigate('signup', { role: 'patient' })}
                className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Join as Patient</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('signup', { role: 'doctor' })}
                className="w-full md:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center space-x-2 border-2 border-blue-600"
              >
                <span>Join as Doctor</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-50 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-50 rounded-full blur-3xl opacity-50" />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Why Choose LungAI?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI technology with medical expertise
              to provide you with the best lung health analysis experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`${feature.color} text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust LungAI for their lung health analysis.
            Choose your role and begin your journey to better health monitoring.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={() => onNavigate('signup', { role: 'patient' })}
              className="w-full md:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Join as Patient</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('signup', { role: 'doctor' })}
              className="w-full md:w-auto bg-transparent text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-500/20 transition-colors inline-flex items-center justify-center space-x-2 border-2 border-white"
            >
              <span>Join as Doctor</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold text-blue-600">LungAI</h1>
              <p className="text-slate-600 mt-1">Advanced Lung Health Analysis</p>
            </div>
            <div className="flex space-x-6">
              <button className="text-slate-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </button>
              <button className="text-slate-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </button>
              <button className="text-slate-600 hover:text-blue-600 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;