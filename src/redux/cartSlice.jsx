import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of cart items: { id, name, price, thumbnail, quantity }
  totalItems: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find(item => item.id === plant.id);
      
      if (existingItem) {
        // If item already exists, increment quantity
        existingItem.quantity += 1;
      } else {
        // Add new item to cart
        state.items.push({
          id: plant.id,
          name: plant.name,
          price: plant.price,
          thumbnail: plant.thumbnail,
          quantity: 1,
        });
      }
      
      // Recalculate totals
      cartSlice.caseReducers.calculateTotals(state);
    },
    
    updateQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity += 1;
      }
      cartSlice.caseReducers.calculateTotals(state);
    },
    
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        // Remove item if quantity would become 0
        state.items = state.items.filter(item => item.id !== id);
      }
      cartSlice.caseReducers.calculateTotals(state);
    },
    
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      cartSlice.caseReducers.calculateTotals(state);
    },
    
    calculateTotals: (state) => {
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  },
});

export const { addItem, updateQuantity, decrementQuantity, removeItem } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectTotalItems = (state) => state.cart.totalItems;
export const selectTotalAmount = (state) => state.cart.totalAmount;
export const selectIsInCart = (state, plantId) => 
  state.cart.items.some(item => item.id === plantId);

export default cartSlice.reducer;