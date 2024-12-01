import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import "./App.css";
import Registration from "./component/Registration";
import Products from "./component/Products";
import Navbar from "./component/Navbar";
import Herobanner from "./component/Herobanner";
import Footer from "./component/Footer";
// import Login from './component/Login'
import Home from "./component/Home";
import { Outlet } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import Dashboard from "./component/Dashboard";
// import { Routes,Route } from 'react-router-dom'

function App() {
  // const [inp, setInp] = useState("");
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState("");

  const handelchange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Navbar
        hand={handelchange}
        search={search}
        setSearch={setSearch}
        open={open}
        setOpen={setOpen}
      ></Navbar>
      <Dashboard open={open} setOpen={setOpen}></Dashboard>
      <Outlet>
        <Products search={search} setSearch={setSearch} />
        <Home search={search} setSearch={setSearch} />
        <Login></Login>
        <Register></Register>
      </Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
