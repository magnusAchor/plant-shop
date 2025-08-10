import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaArrowRight } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full-screen background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <FaLeaf className="h-16 w-16 text-emerald-400 mr-4" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            GreenThumb Plants
          </h1>
        </div>

        {/* Company Description */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl sm:text-2xl text-gray-100 leading-relaxed">
            We offer the best houseplants to brighten your home. Fresh, affordable, 
            and easy to care for. Transform your living space into a green oasis 
            with our carefully selected collection of beautiful houseplants.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="text-center">
            <div className="bg-emerald-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <FaLeaf className="h-8 w-8 text-emerald-300" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Premium Quality</h3>
            <p className="text-gray-200">Hand-picked, healthy plants delivered fresh to your door</p>
          </div>
          <div className="text-center">
            <div className="bg-emerald-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <FaLeaf className="h-8 w-8 text-emerald-300" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Easy Care</h3>
            <p className="text-gray-200">Perfect for beginners and experienced plant parents alike</p>
          </div>
          <div className="text-center">
            <div className="bg-emerald-500 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <FaLeaf className="h-8 w-8 text-emerald-300" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Affordable</h3>
            <p className="text-gray-200">Great prices on beautiful plants for every budget</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/products"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
        >
          <span>Get Started</span>
          <FaArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;