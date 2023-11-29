import { configureStore } from "@reduxjs/toolkit";
import ringReducer from "./slice";

export const store = configureStore({
  reducer: {
    ring: ringReducer,
  },
});
