/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageModalCarousel = ({ images, selectedIndex, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative z-[999] bg-white">
        <Carousel
          dynamicHeight={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          selectedItem={selectedIndex}
          swipeable={true}
          emulateTouch={true}
          useKeyboardArrows={true}
          className="max-w-[80vw] h-[90vh] mx-auto"
          renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
            hasPrev && (
              <button
                onClick={clickHandler}
                className="w-7 absolute z-50 top-[50%] left-6 h-7 bg-black bg-opacity-20 rounded-full hover:bg-opacity-50 transition duration-200"
              >
                <img
                  className=" w-5 h-5 mx-auto my-auto pb-1"
                  alt="prev"
                  src={`https://s2.svgbox.net/hero-outline.svg?ic=chevron-left`}
                />
              </button>
            )
          }
          renderArrowNext={(clickHandler, hasNext, labelNext) =>
            hasNext && (
              <button
                onClick={clickHandler}
                className="absolute top-[50%] right-6 w-7 h-7 bg-black bg-opacity-20 rounded-full hover:bg-opacity-50 transition duration-200"
              >
                <img
                  className="w-5 h-5 mx-auto my-auto pb-1"
                  alt="next"
                  src={`https://s2.svgbox.net/hero-outline.svg?ic=chevron-right`}
                />
              </button>
            )
          }
        >
          {images.map((painting, index) => {
            return (
              <div key={index} className="">
                <div className="px-4 py-2 flex gap-x-4 items-center">
                  <div className="flex gap-x-1 items-center">
                    <p className="text-[14px]">Available For Printing</p>
                    <div className="p-0.5 rounded-full bg-teal-200 w-3 h-3">
                      <img
                        src="https://s2.svgbox.net/materialui.svg?ic=check&color=fff"
                        width="20"
                        height="20"
                      />
                    </div>
                  </div>
                  <button className="text-white px-3 py-1 w-32 text-xs bg-teal-300">
                    Purchase Artwork
                  </button>
                </div>
                <div>
                  <img
                    src={`/Paintings/${painting}.jpg`}
                    alt={painting}
                    className="md:max-w-fit md:h-[75vh]"
                  />
                </div>
                <h2>{painting}</h2>
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* Close Button */}
      <button
        className="absolute top-6 right-6 text-white hover:text-gray-300 cursor-pointer z-50 bg-white rounded-full h-8 w-8 p-2"
        onClick={onClose}
      >
        <img src="https://s2.svgbox.net/materialui.svg?ic=close" alt="close" />
      </button>
      <div
        className="absolute inset-0 bg-black opacity-70 z-20"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default ImageModalCarousel;
