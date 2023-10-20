import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Test = () => {
  return (
    <>
      <h2>trsmms</h2>
      <Carousel
        dynamicHeight={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        // selectedItem={2}
        useKeyboardArrows={true}
        className="max-w-[80vw] h-[85vh] mx-auto bg-black"
      >
        <div className="mx-auto">
          <div className="bg-rose-300">
            <h2>trsmms</h2>
            <button>Purchase Artwork</button>
          </div>
          <img
            src="/Paintings/Ama Asantewa _ Acrylic on canvas _ 120cm by 150cm _ 2022.jpg"
            className="md:max-w-fit md:max-h-[80vh] w-auto"
          />
          <p className="">Legend 1</p>
        </div>
        <div className="m-auto">
          <div className="bg-rose-300">
            <h2>trsmms</h2>
            <button>Purchase Artwork</button>
          </div>
          <img
            src="/Paintings/Queen no.2 _ Acrylic on canvas _ 91cm by 182cm _ 2018.jpg"
            className="md:max-w-fit md:max-h-[80vh] w-auto"
          />
          <p className="">Legend 2</p>
        </div>
        <div className="w-[80%] mx-auto">
          <div className="bg-rose-300">
            <h2>trsmms</h2>
            <button>Purchase Artwork</button>
          </div>
          <img
            src="/Paintings/Couch Potato1 _ Acrylic on canvas _ 180cm by 100cm _ 2022.jpg"
            className="md:max-w-fit md:max-h-[80vh] w-auto "
          />
          <p className="">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
};

export default Test;
