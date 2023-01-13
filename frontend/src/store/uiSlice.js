import { createSlice } from "@reduxjs/toolkit";
const name = "ui";
const initialState = { cartIsVisible: false, notification: null };

const cartPageSlice = createSlice({
  name,
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const cartPageActions = cartPageSlice.actions;
export default cartPageSlice;
