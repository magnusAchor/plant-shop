import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../redux/cartSlice';

const Header: React.FC = () => {
  const location = useLocation();
  const totalItems = useSelector(selectTotalItems);

  // Don't show header on landing page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Leaf className="h-8 w-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
            <span className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
              GreenThumb Plants
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Products
            </Link>
          </nav>

          {/* Cart Icon with Badge */}
          <Link to="/cart" className="relative p-2 text-gray-600 hover:text-emerald-600 transition-colors group">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-pulse">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;