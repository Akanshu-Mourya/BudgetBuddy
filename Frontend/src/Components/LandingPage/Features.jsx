import React from 'react';
import{ darkThemeColor} from '../DarkLiteMood/ThemeProvider'

const Features = () => {
    const features = [
        {
            icon: '💰',
            title: 'Expense Tracking',
            description: 'Track your daily expenses and manage your spending habits effectively.',
        },
        {
            icon: '📈',
            title: 'Financial Insights',
            description: 'Get personalized insights and reports to improve your financial health.',
        },
        {
            icon: '🏦',
            title: 'Savings Goals',
            description: 'Set savings goals and monitor your progress to achieve them effortlessly.',
        },
        {
            icon: '💼',
            title: 'Income Tracking',
            description: 'Monitor your income sources and keep a detailed record of your earnings.',
        },
    ];


    return (
        <div id="features-section" className={`${darkThemeColor }  bg-gray-50 py-20 `}>
            <div className="container mx-auto px-10" id='features'>
                <h2 className={`dark:text-gray-300 text-4xl font-extrabold text-gray-800 text-center mb-10 `}>
                    Why Choose Budget<span className="text-[#2a8e9e] hover:text-[#257c8a] cursor-pointer">Buddy</span>
                </h2>
                <p className= {`  dark:text-gray-300 text-lg text-gray-600 text-center mb-16`}>
                    Explore the powerful features designed to help you manage your finances better.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${darkThemeColor} p-8 bg-white shadow-md   rounded-lg text-center transform hover:scale-105 transition-transform duration-300 dark:shadow-gray-950   dark:hover:shadow-gray-300 `}
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className={`${darkThemeColor} text-xl font-semibold text-gray-800 mb-2`}>{feature.title}</h3>
                            <p className={`${darkThemeColor}text-gray-600 `}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
