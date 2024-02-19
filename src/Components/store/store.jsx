import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./slice/slice";

export const store = configureStore({
  reducer: {
    name: adminReducer,
  },
});
