import React from "react";
import Header from "../layouts/Header";
import Slider from "../layouts/Slider";
import News from "../layouts/News";
import Footer from "../layouts/Footer";

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <News />
      <Footer />
    </>
  );
}

export default Home;
