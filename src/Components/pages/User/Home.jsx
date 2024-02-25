import React from "react";
import Header from "../../layouts/User/Header";
import Slider from "../../layouts/User/Slider";
import News from "../../layouts/User/News";
import Footer from "../../layouts/User/Footer";

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
