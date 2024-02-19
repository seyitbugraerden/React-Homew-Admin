import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbarItems: ["Header", "Schedule", "Teams", "Subscription"],
  slider: {
    img: "https://img3.aksam.com.tr/imgsdisk/2021/04/26/t25_formula-1de-yeni-donem-sp-955.jpg",
    title: "Race Day Insights",
    desc: "Get behind-the-scenes analysis and expert commentary on the latest F1 races.",
  },
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
});

export default adminSlice.reducer;
