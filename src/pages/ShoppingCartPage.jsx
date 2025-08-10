import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus, FaTrash, FaShoppingBag, FaArrowLeft } from 'react-icons/fa';
import { 
  selectCartItems, 
  selectTotalItems, 
  selectTotalAmount,
  updateQuantity,
  decrementQuantity,
  removeItem
} from '../redux/cartSlice';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalAmount = useSelector(selectTotalAmount);

  const handleIncrement = (id) => {
    dispatch(updateQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  // Empty Cart State
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <FaShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-8" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any plants to your cart yet. 
              Start browsing our beautiful collection!
            </p>
            <Link
              to="/products"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <FaArrowLeft className="h-4 w-4" />
              <span>Shop Now</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            You have {totalItems} {totalItems === 1 ? 'plant' : 'plants'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Cart Items</h2>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onIncrement={handleIncrement}
                      onDecrement={handleDecrement}
                      onRemove={handleRemove}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Total Plants:</span>
                  <span>{totalItems}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Total:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Checkout
                </button>
                <Link
                  to="/products"
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-full transition-colors text-center block"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
      {/* Product Image */}
      <img
        src={item.thumbnail}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
      />

      {/* Product Info */}
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)} each</p>
        <p className="text-sm text-gray-500">
          Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onDecrement(item.id)}
          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
        >
          <FaMinus className="h-3 w-3 text-gray-600" />
        </button>
        
        <span className="font-medium text-lg w-8 text-center">{item.quantity}</span>
        
        <button
          onClick={() => onIncrement(item.id)}
          className="w-8 h-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center transition-colors"
        >
          <FaPlus className="h-3 w-3" />
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors"
        title="Remove from cart"
      >
        <FaTrash className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ShoppingCartPage;