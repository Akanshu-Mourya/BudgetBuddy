import React from 'react';

const AboutSection = () => {
  return (
    <div id="about-section" className="bg-gray-50 py-20 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto max-w-6xl text-center"id='about'>
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          About Budget<span className="text-[#2a8e9e]">Buddy</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          BudgetBuddy is your ultimate companion for financial success.
          Whether you want to track your expenses, set savings goals, or monitor your income, BudgetBuddy provides an easy-to-use platform to help you stay on top of your finances.
          Our mission is to empower individuals and families to take control of their money and achieve financial freedom.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Track Your Finances</h3>
            <p className="text-gray-600">
              Easily monitor where your money is going and make informed decisions to improve your financial health.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Achieve Savings Goals</h3>
            <p className="text-gray-600">
              Set realistic goals, save more efficiently, and watch your savings grow over time.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Stay in Control</h3>
            <p className="text-gray-600">
              Gain financial clarity and peace of mind with personalized insights and simple tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
