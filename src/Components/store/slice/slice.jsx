import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbarItems: ["Header", "Schedule", "Teams", "Subscription"],
  slider: {
    img: "https://img3.aksam.com.tr/imgsdisk/2021/04/26/t25_formula-1de-yeni-donem-sp-955.jpg",
    title: "Race Day Insights",
    desc: "Get behind-the-scenes analysis and expert commentary on the latest F1 races.",
  },
  main: {
    mutedTitle: "WHO IS HERE",
    title: "Brand Spotlight: Powerhouses of the Circuit",
    partOne: {
      mutedTitle: "MOST WINNER",
      title: "Mercedes-AMG",
      desc: "Mercedes-AMG Petronas Formula One Team is a powerhouse in Formula 1, renowned for its dominance in the sport's modern era. With cutting-edge technology, top-tier engineering, and a roster of world-class drivers, Mercedes-AMG consistently pushes the boundaries of speed and innovation on the race track.",
      img: "https://i.pinimg.com/originals/e1/1c/c8/e11cc8ad8bff2641e0076ad00e4beb98.jpg",
    },
    partSec: {
      mutedTitle: "MOST POPULAR",
      title: "Scuderia Ferrari",
      desc: "Ferrari is an iconic name in Formula 1, synonymous with passion, tradition, and success. With a storied history spanning decades, the Scuderia Ferrari team continues to captivate fans worldwide with its distinctive red cars and unwavering pursuit of victory on the race track.",
      img: "https://www.mostlyf1.com/wp-content/uploads/2019/09/Charles-Leclerc-Italy-2019-Podium.jpg",
    },
  },
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
});

export default adminSlice.reducer;
