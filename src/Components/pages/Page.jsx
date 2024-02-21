import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { useParams } from "react-router-dom";

function Page() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <Footer />

      <h5>{id}</h5>
    </>
  );
}

export default Page;
