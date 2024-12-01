// import { response } from 'express'
// import React from 'react'
import ScrollReveal from "scrollreveal";
import { useCallback, useEffect, useRef, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import "./Products.css";

function Products({ search, setSearch }) {
  const [product, setProducts] = useState([]);

  console.log(10, search);

  async function getProducts() {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${setSearch}+terms`
    );
    const data = await response.json();
    const items = data.items;

    setProducts(items);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div id="pl" className="items-container">
        {product.map((data) => (
          <div className="flex font-serif">
            <div className="flex-none w-52 relative div-box">
              <img
                src={data.volumeInfo.imageLinks.thumbnail}
                alt
                className="item-image"
                loading="lazy"
              />
            </div>
            <Slide delay={10} direction={"left"} cascade={true} duration={500}>
              <form className="flex form-control">
                <div className="flex">
                  <h1 className="wil-flx h1-containt text-white">
                    {data.volumeInfo.title}
                  </h1>
                  <div className="wil-flx h2-containt flex-auto text-lg font-medium text-white">
                    {data.volumeInfo.authors}
                  </div>
                  <div className="wil-flx text-xs leading-6 font-medium uppercase text-white">
                    {search}
                  </div>
                </div>

                <div className="flex space-x-4 mb-5 text-sm font-medium">
                  <div className="flex-auto flex space-x-4 pr-4">
                    <button
                      className="buy-btn flex-none w-1/2 h-12 uppercase font-medium tracking-wider text-white"
                      type="submit"
                    >
                      Buy now
                    </button>
                    <button
                      className="add-bag flex-none w-1/2 h-12 uppercase font-medium tracking-wider text-white"
                      type="button"
                    >
                      Add to bag
                    </button>
                  </div>
                  <button
                    className="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200"
                    type="button"
                    aria-label="Like"
                  >
                    <svg
                      width={20}
                      height={20}
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </Slide>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
