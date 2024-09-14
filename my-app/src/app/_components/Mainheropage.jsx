/**import React from 'react';
import { FaGithub } from 'react-icons/fa';

function HeroSection() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white">
      <div className="text-center space-y-4">
        <span className="text-xs text-purple-400 font-bold">🚀 Introducing Saasfly</span>
        <h1 className="text-5xl font-extrabold leading-tight">
          Saasfly: A new SaaS player? Make things easier.
        </h1>
        <p className="text-lg">
          Your complete All-in-One solution for building SaaS services. Build awesome apps and ship fast with <span className="text-blue-400 underline">Saasfly</span>.
        </p>
        <div className="space-x-4 mt-4">
          <button className="bg-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-400">
            Get Started
          </button>
          <button className="flex items-center bg-gray-800 px-6 py-2 rounded-lg font-bold hover:bg-gray-600">
            <FaGithub className="mr-2" />
            View on GitHub
          </button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
       
        <div className="bg-gray-800 p-6 rounded-lg space-y-2">
          <h2 className="text-xl font-bold">Making Sense of React Server Components</h2>
          <p>So, here’s something that makes me feel old: React celebrated its 10th birthday this year!</p>
          <p className="text-sm text-gray-400">26th March, 2024</p>
          <button className="text-blue-400 underline">Read More</button>
        </div>

        
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
            <span className="bg-yellow-500 w-8 h-8 flex items-center justify-center rounded-full">👤</span>
            <p>User signed up - 10m ago</p>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
            <span className="bg-green-500 w-8 h-8 flex items-center justify-center rounded-full">💸</span>
            <p>Payment received - 15m ago</p>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
            <span className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full">🚀</span>
            <p>Easy Deploy - 2m ago</p>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
            <span className="bg-red-500 w-8 h-8 flex items-center justify-center rounded-full">📧</span>
            <p>New Emails - 5m ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection; **/


import React from 'react';
import { FaGithub } from 'react-icons/fa';

function HeroSection() {
  return (
    <div className="min-h-screen flex items-center px-12">
      {/* Left Section - Text */}
      <div className="flex-1 space-y-4">
        <span className="text-xs text-purple-400 font-bold">🚀 Introducing EcoMines</span>
        <h1 className="text-7xl font-extrabold leading-tight">
          Empowering India's Coal Sector<br />
          <span className="block text-6xl text-blue-600">Smart</span>
          <span className="block text-6xl text-green-600">Carbon Neutrality</span>
        </h1>
        <p className="text-lg">
          Your comprehensive tool for optimizing coal mining emissions and achieving{' '}
          <span className="text-green-500 font-bold">carbon neutrality</span>.
        </p>
      </div>

      {/* Right Section - Modern UI with Image and Cards */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Image Section */}
        <div className="bg-gray-100 p-6 rounded-lg space-y-4 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace this with the actual image path
            alt="Carbon Neutrality in Coal Mining"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            Achieving Carbon Neutrality in Coal Mining
          </h2>
          <p className="text-gray-600">
            A comprehensive tool designed to help coal mines reduce emissions and
            achieve carbon neutrality through cleaner technologies and carbon offset
            strategies.
          </p>
        </div>

        {/* Features Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg">
            <span className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full text-white">🌱</span>
            <p className="text-gray-700">
              Emissions Tracking - Monitor carbon emissions from all mining activities.
            </p>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg">
            <span className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-full text-white">📊</span>
            <p className="text-gray-700">
              Data Visualization - View emission trends and carbon reduction pathways visually.
            </p>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg">
            <span className="bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-full text-white">💡</span>
            <p className="text-gray-700">
              Clean Technologies - Simulate the impact of adopting electric vehicles and renewable energy.
            </p>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg">
            <span className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-full text-white">🌳</span>
            <p className="text-gray-700">
              Afforestation - Calculate how tree planting offsets can neutralize emissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
