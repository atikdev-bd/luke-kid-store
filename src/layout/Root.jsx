import React from "react";
import Navbar from "../components/header/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Banner from "../components/header/Banner";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
