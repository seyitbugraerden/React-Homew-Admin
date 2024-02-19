import { createSlice } from "@reduxjs/toolkit";
import data from "../data/db.json";

const initialState = data;

const adminSlice = createSlice({
  name: "admin",
  initialState,
});

export default adminSlice.reducer;
