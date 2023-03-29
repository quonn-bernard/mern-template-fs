import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js";
import itemReducer from "../features/items/itemSlice.js";
//
//
//
export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemReducer
  },
});
