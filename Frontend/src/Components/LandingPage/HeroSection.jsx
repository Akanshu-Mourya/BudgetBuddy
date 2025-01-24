
import React from 'react';

const HeroSection = () => {
    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <section className="m-5 p-6 bg-gray-100 rounded-lg shadow-lg">
                        <h1 className="text-4xl font-semibold text-gray-800">
                            Smart Solutions for Every Budget with Budget<span className='text-[#2a8e9e]'>Buddy</span>
                        </h1>
                        <p className="text-gray-600 mt-4">
                            Take control of your finances and achieve your savings goals with ease using BudgetBuddy's intuitive budgeting tools.
                        </p>
                    </section>

                    <section className="m-5 p-6 bg-gray-100 rounded-lg shadow-lg">
                        {/* You can add an image, call to action, or any additional content here */}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
