import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    data: "2",
  },
  reducers: {},
});

export default adminSlice.reducer;
