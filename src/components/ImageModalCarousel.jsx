import Image from "next/image";
import React from "react";

const ImageModalCarousel = ({ images, selectedIndex, onClose }) => {
  return (
    <div className="fixed inset-0 z-50">
      <div className="">
        <div className="flex gap-x-6">
          <p>Artwork Name</p>
          <button>Buy Painting Copy</button>
        </div>
        <div className="w-full h-full">
          <Image src={""} alt="src" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ImageModalCarousel;
