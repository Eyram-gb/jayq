import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageModalCarousel = ({ images, selectedIndex, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative z-[999] bg-white">
        <Carousel
          dynamicHeight={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          selectedItem={selectedIndex}
          swipeable={true}
          useKeyboardArrows={true}
          className="max-w-[80vw] max-h-[85vh] mx-auto"
          renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
            hasPrev && (
              <button
                onClick={clickHandler}
                className="w-6 absolute top-[50%] left-8"
              >
                <img
                  className=""
                  src={`https://s2.svgbox.net/hero-outline.svg?ic=chevron-left`}
                />
              </button>
            )
          }
          renderArrowNext={(clickHandler, hasPrev, labelPrev) =>
            hasPrev && (
              <button
                onClick={clickHandler}
                className="absolute top-[50%] w-6 right-6"
              >
                <img
                  className=""
                  src={`https://s2.svgbox.net/hero-outline.svg?ic=chevron-right`}
                />
              </button>
            )
          }
        >
          {images.map((painting, index) => {
            return (
              <div key={index} className="my-auto">
                <div className="flex gap-x-2">
                  <h2>{painting}</h2>
                  <button className="text-gray-500 px-3 py-1 text-xs border border-cyan-300">
                    Purchase Artwork
                  </button>
                </div>
                <img
                  src={`/Paintings/${painting}.jpg`}
                  className="md:max-w-fit md:max-h-[80vh]"
                />
              </div>
            );
          })}
        </Carousel>
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 cursor-pointer"
          onClick={onClose}
        >
          <img src="https://s2.svgbox.net/materialui.svg?ic=close" alt="close" />
        </button>
      </div>
      <div
        className="absolute inset-0 bg-black opacity-70 z-20"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default ImageModalCarousel;
