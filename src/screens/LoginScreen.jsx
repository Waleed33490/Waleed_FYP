import React from 'react';

const LoginScreen = ({ onNavigate, onAuth }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">LungAI</h1>
          <p className="text-slate-600">Advanced Lung Health Analysis</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-800">Welcome back</h2>
            <p className="text-slate-600 text-sm">Please enter your details to sign in</p>
          </div>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-slate-600">Remember me</span>
              </label>
              <button type="button" className="text-sm text-blue-600 hover:text-blue-700">Forgot password?</button>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                onAuth();
                onNavigate('dashboard');
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
            >
              Sign in
            </button>
          </form>
        </div>
        <p className="text-center text-slate-600">
          Don't have an account?{' '}
          <button
            onClick={() => onNavigate('signup')}
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;