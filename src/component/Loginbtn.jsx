import React from "react";

function Loginbtn() {
  return (
    <>
      <a
        href="#_"
        class=" relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
      >
        <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span
          style={{
            width: "80px",
            height: "15px",
            fontSize: "20px",
            textAlign: "center",
            alignContent: "center"
          }}
          class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white"
        >
          Log In
        </span>
      </a>
    </>
  );
}

export default Loginbtn;
