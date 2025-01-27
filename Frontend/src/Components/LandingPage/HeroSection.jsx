import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div id="hero-section" className="container mx-auto px-10 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Text Section */}
                <section className="m-5 p-8 bg-white">
                    <h1 className="text-4xl font-extrabold text-gray-800 leading-tight  sm:text-6xl ">
                        Simplify Your Budgeting with Budget
                        <span className="text-[#2a8e9e] hover:text-[#257c8a] cursor-pointer transition duration-300">
                            Buddy
                        </span>
                    </h1>

                    <p className="text-gray-700 mt-6 text-lg md:text-xl leading-relaxed">
                        Take control of your finances and achieve your savings goals effortlessly with BudgetBuddy's intuitive budgeting tools.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-start mt-10 gap-4">
                        {/* Call-to-Action Button */}
                        <Link
                            to="/register"
                            className="bg-[#257c8a] text-white py-2 px-10 rounded-full hover:bg-[#2a8e9e] hover:shadow-xl transition duration-300 ease-in-out w-full text-center lg:w-80  "
                            aria-label="Create Account"
                        >
                            Create Account
                        </Link>
                        {/* Reviews Section */}
                        <div className="flex items-center gap-6">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={index < 4 ? "currentColor" : "none"}
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className={`w-6 h-6 ${index < 4 ? "text-yellow-400" : "text-gray-300"}`}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm">
                                4.8 from <span className="font-semibold">500+ reviews</span>
                            </p>
                            <div className="flex -space-x-2">
                                <img
                                    className="w-10 h-10 rounded-full border-2 border-white transition-transform transform hover:scale-110"
                                    src="https://randomuser.me/api/portraits/women/1.jpg"
                                    alt="Customer Review 1"
                                />
                                <img
                                    className="w-10 h-10 rounded-full border-2 border-white transition-transform transform hover:scale-110"
                                    src="https://randomuser.me/api/portraits/men/2.jpg"
                                    alt="Customer Review 2"
                                />
                                <img
                                    className="w-10 h-10 rounded-full border-2 border-white transition-transform transform hover:scale-110"
                                    src="https://randomuser.me/api/portraits/women/3.jpg"
                                    alt="Customer Review 3"
                                />
                                <img
                                    className="w-10 h-10 rounded-full border-2 border-white transition-transform transform hover:scale-110"
                                    src="https://randomuser.me/api/portraits/men/4.jpg"
                                    alt="Customer Review 4"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Section */}
                <section className="m-5 p-6 bg-white bg-opacity-80 rounded-lg hidden lg:block">
                    <img
                        src="/images/ProfessionalCollaboration.jpg"
                        alt="Financial Features Grid"
                        className="rounded-lg w-full h-[400px] sm:h-[500px] md:h-[500px] lg:h-[500px] object-cover hidden lg:block"
                    />
                </section>
            </div>
        </div>
    );
};

export default HeroSection;
