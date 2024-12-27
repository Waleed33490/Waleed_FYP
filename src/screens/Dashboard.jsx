import React from 'react';
import { FileText, Upload, Stethoscope, Users, ChevronRight } from 'lucide-react';

const Dashboard = ({ onNavigate }) => {
  const options = [
    {
      title: "Lung Health Check",
      icon: <Upload className="w-6 h-6" />,
      description: "Upload and analyze lung images",
      navigate: () => onNavigate('upload'),
      color: "bg-blue-500"
    },
    {
      title: "Health Tips",
      icon: <FileText className="w-6 h-6" />,
      description: "Expert advice for lung care",
      navigate: () => onNavigate('tips'),
      color: "bg-indigo-500"
    },
    {
      title: "Medical Experts",
      icon: <Users className="w-6 h-6" />,
      description: "Connect with specialists",
      navigate: () => onNavigate('doctors'),
      color: "bg-violet-500"
    },
    {
      title: "Coming Soon",
      icon: <Stethoscope className="w-6 h-6" />,
      description: "New features in development",
      navigate: () => {},
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Welcome to LungAI</h1>
          <p className="text-slate-600 mt-2">Monitor and improve your lung health with AI assistance</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={option.navigate}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden"
            >
              <div className="flex items-start space-x-4">
                <div className={`${option.color} text-white p-3 rounded-xl`}>
                  {option.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-slate-600 mt-1 text-sm">{option.description}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-semibold mb-2">Get Started with AI Analysis</h2>
          <p className="text-blue-100 mb-4">Upload your lung scan and receive instant AI-powered insights</p>
          <button
            onClick={() => onNavigate('upload')}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Start Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;