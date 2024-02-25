import React from "react";
import Header from "../../layouts/User/Header";
import Footer from "../../layouts/User/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Page() {
  const { id } = useParams();
  const data = useSelector((state) => state.admin);
  return (
    <>
      <Header />
      {id}
      <Footer />
    </>
  );
}

export default Page;
