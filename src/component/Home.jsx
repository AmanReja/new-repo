import React, { useState } from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import Footer from "./Footer";
import Herobanner from "./Herobanner";
import Slider from "./Slider";
import Dashboard from "./Dashboard";

function Home({ search, setSearch }) {
  return (
    <>
      <Slider></Slider>

      <Herobanner></Herobanner>
      <Products search={search} setSearch={setSearch}></Products>
    </>
  );
}

export default Home;
