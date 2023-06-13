import React, { useState } from "react";
import Masonry from "react-masonry-css";
import ImageModal from "../../Components/ImageModal";
import Layout from "../../Components/Layout";

const imageNames = ["ART Karlsruhe 2022", "ArtX Lagos _ 2019"];

const ArtFairs = () => {
  const breakpointColumnsObj = {
    default: 3,
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageName) => {
    setSelectedImage(imageName);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Layout>
      <div className="px-10 py-10 flex justify-center w-full mx-auto">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {imageNames.map((item) => {
            return (
              <div
                className="w-full group relative cursor-pointer"
                key={item}
                onClick={() => openModal(item)}
              >
                <img
                  src={`/Exhibitions/Art Fairs/${item}.jpg`}
                  alt="artwork"
                  className=" w-full transition-all duration-150 group-hover:blur-[4px]"
                />
                <p className="inset-center w-full px-3 text-center font-extralight text-white transition-all duration-100 group-hover:visible">
                  {item}
                </p>
              </div>
            );
          })}
        </Masonry>
      </div>
      {selectedImage && (
        <ImageModal
          imageUrl={`/Exhibitions/Art Fairs/${selectedImage}.jpg`}
          onClose={closeModal}
        />
      )}
    </Layout>
  );
};
export default ArtFairs;
