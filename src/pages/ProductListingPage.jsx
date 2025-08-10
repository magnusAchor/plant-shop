import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaCheck } from 'react-icons/fa';
import { plants, getCategories } from '../data/plants';
import { addItem, selectIsInCart } from '../redux/cartSlice';

const ProductListingPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const dispatch = useDispatch();
  const categories = ['All', ...getCategories()];

  const filteredPlants = activeCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === activeCategory);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Plant Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of beautiful houseplants. 
            From easy-care succulents to statement foliage and flowering plants.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-emerald-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlants.map((plant) => (
            <ProductCard 
              key={plant.id} 
              plant={plant} 
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredPlants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No plants found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({ plant, onAddToCart }) => {
  const isInCart = useSelector(state => selectIsInCart(state, plant.id));

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
      {/* Category Badge */}
      <div className="relative">
        <img
          src={plant.thumbnail}
          alt={plant.name}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
          {plant.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{plant.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{plant.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-emerald-600">
            ${plant.price.toFixed(2)}
          </span>
          
          <button
            onClick={() => onAddToCart(plant)}
            disabled={isInCart}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
              isInCart
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white transform hover:scale-105 shadow-lg hover:shadow-xl'
            }`}
          >
            {isInCart ? (
              <>
                <FaCheck className="h-4 w-4" />
                <span>Added</span>
              </>
            ) : (
              <>
                <FaPlus className="h-4 w-4" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;