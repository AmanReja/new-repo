import React, { useState } from "react";
import glass from "../assets/images/glass.png";
import image from "../assets/images/image.png";
import b1 from "../assets/books/b1.jpg";
import b2 from "../assets/books/b2.jpg";
import b3 from "../assets/books/b3.jpg";
import b4 from "../assets/books/b4.jpg";
import b5 from "../assets/books/b5.jpg";
import b6 from "../assets/books/b6.jpg";
import b7 from "../assets/books/b7.jpg";
import b8 from "../assets/books/b8.jpg";
import b9 from "../assets/books/b9.jpg";
import "./Slider.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    if (currentIndex == 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const nextSlide = () => {
    if (currentIndex == slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const slides = [
    { url: glass },
    { url: b2 },
    { url: b3 },
    { url: b6 },

    { url: b9 }
  ];

  console.log(33, slides[currentIndex]?.url);

  return (
    <>
      <div className="aman max w-[1400]px h-[700px] w-full m-auto py-20 px-20 absolute">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="box w-full h-full rounded-2xl bg-center bg-cover duration-700 "
        ></div>
        <div className=" nav-l absolute top-[50%] -translate-x-0 translate-x[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={40} />
        </div>
        <div className="nav-l absolute top-[50%] -translate-x-0 translate-x[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={40} />
        </div>
      </div>
    </>
  );
}

export default Slider;
