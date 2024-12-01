import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/12.png";
import Loginbtn from "./Loginbtn";

function Navbar({ search, setSearch, hand }) {
  const user_menu = document.querySelector("#user-menu-button");
  const menu_buttons = document.querySelector("#menu-buttons");

  const [open, setOpen] = useState(true);
  const [openinp, setOpeninp] = useState(true);
  // const [inp, setInp] = useState("Team");

  // console.log(inp);

  function show() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }
  function openInp() {
    const show_icon = document.querySelector(".show-icon");
    const cross_icon = document.querySelector(".cross-icon");

    if (openinp) {
      setOpeninp(false);

      cross_icon.style.display = "inline-flex";
      show_icon.style.display = "none";
    } else {
      setOpeninp(true);
      show_icon.style.color = "white";
      cross_icon.style.display = "none";
      show_icon.style.display = "inline-flex";
    }
  }

  // if(open){
  //   setOpen(false)

  // useEffect(()=>{
  //   closed()
  // },[setDisplay])

  // const first = useRef()

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                onClick={() => {
                  show();
                }}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {/*
        Icon when menu is closed.
  
        Menu open: "hidden", Menu closed: "block"
      */}
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/*
        Icon when menu is open.
  
        Menu open: "block", Menu closed: "hidden"
      */}
                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <h3 className="logo text-3xl">MY LOGO </h3>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                  <Link>
                    <a
                      href="#"
                      className="erounded-md px-3 py-2 text-sm font-medium text-white hover:bg-lime-500"
                      aria-current="page"
                    >
                      Dashboard
                    </a>
                  </Link>

                  <Link></Link>
                  <Link to="/">
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Home
                    </a>
                  </Link>
                  <Link>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Contact us
                    </a>
                  </Link>
                  <Link>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      About Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <form className="search-container">
              <input
                id="m-search"
                onChange={hand}
                placeholder="Search here"
                className={openinp ? "search-inp" : "open-inp"}
                type="text"
              />
              <span
                type="submit"
                className="center"
                onClick={() => {
                  openInp();
                }}
              >
                <i class="text-2xl fa-solid fa-magnifying-glass show-icon"></i>
                <i
                  style={{ display: "none" }}
                  class="text-2xl fa-solid fa-xmark cross-icon"
                ></i>
              </span>
            </form>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </button> */}
              {/* Profile dropdown */}
              <div className="log-btn relative ml-3">
                <div>
                  <Link to="login">
                    <Loginbtn></Loginbtn>
                    {/* <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
    <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Log In</span>
</a> */}
                  </Link>{" "}
                  {/* <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt /> */}
                </div>
                {/*
        Dropdown menu, show/hide based on menu state.
  
        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      */}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className={open ? " show-profile" : ""} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;