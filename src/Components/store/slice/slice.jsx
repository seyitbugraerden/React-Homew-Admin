import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerButton: "Contact Us",
  navbarItems: ["Header", "Schedule", "Teams", "Subscription"],
  logo: "https://assets-global.website-files.com/65d25ec9405b7cdf530bfabd/65d25ec9405b7cdf530bfb1a_menu-icon.png",
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
  news: {
    mutedTitle: "NEWS",
    title: "Latest News",
    blogOne: {
      title: "New Regulations Unveiled for 2024 Season",
      date: "JAN 24, 2024",
      desc: "F1 governing body, the FIA, has revealed significant changes to the technical regulations for the 2024 season, aiming to improve racing and reduce costs. These alterations include tweaks to aerodynamics, standardized parts, and sustainability measures.",
    },
    blogSec: {
      title: "Driver Transfers Shake Up Grid",
      date: "JAN 21, 2024",
      desc: "Several high-profile driver transfers have occurred ahead of the 2024 season, with notable moves including Lewis Hamilton's switch to Aston Martin and Max Verstappen joining Ferrari. These changes promise to add excitement and unpredictability to the upcoming championship.",
    },
    blogThr: {
      title: "Expansion Plans for F1 Calendar",
      date: "JAN 21, 2024",
      desc: "Formula 1 is exploring new venues and markets for its race calendar, with discussions underway to potentially add races in countries like Indonesia and Qatar. These expansion plans aim to broaden the sport's global footprint and attract new fans.",
    },
  },
  subs: {
    title: "F1 Insider Access: Your Ticket to Exclusive Race Updates",
    desc: "Subscribe now to unlock premium notifications and in-depth race insights. Get ahead of the curve with insider access to all the action on and off the track!",
  },
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
});

export default adminSlice.reducer;
