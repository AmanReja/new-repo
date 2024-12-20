import React, { useState } from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import Footer from "./Footer";
import Herobanner from "./Herobanner";
import Slider from "./Slider";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <>
      <Slider></Slider>

      <Herobanner></Herobanner>
      <Products></Products>
    </>
  );
}

export default Home;
