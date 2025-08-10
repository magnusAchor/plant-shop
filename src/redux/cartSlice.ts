import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Plant } from '../data/plants';

interface CartItem {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Plant>) => {
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
    
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity += 1;
      }
      cartSlice.caseReducers.calculateTotals(state);
    },
    
    decrementQuantity: (state, action: PayloadAction<number>) => {
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
    
    removeFromCart: (state, action: PayloadAction<number>) => {
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

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectTotalItems = (state: { cart: CartState }) => state.cart.totalItems;
export const selectTotalAmount = (state: { cart: CartState }) => state.cart.totalAmount;
export const selectIsInCart = (state: { cart: CartState }, plantId: number) => 
  state.cart.items.some(item => item.id === plantId);

export default cartSlice.reducer;