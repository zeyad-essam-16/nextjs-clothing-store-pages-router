import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    isLoading: true,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },
    addItem(state, action) {
      const newItem = action.payload;
      state.totalPrice = state.totalPrice + newItem.price * newItem.quantity;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      );
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
      }
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      state.totalPrice =
        state.totalPrice - existingItem.price * existingItem.quantity;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    resetCart(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
