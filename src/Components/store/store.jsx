import { configureStore } from "@reduxjs/toolkit";
import AdminReducer from "./slice/slice";

export const store = configureStore({
  reducer: {
    admin: AdminReducer,
  },
});
