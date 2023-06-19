import React, { useState } from "react";
import Masonry from "react-masonry-css";
import ImageModal from "../../components/ImageModal";
import Layout from "../../components/Layout";

const imageNames = [
  "32 muses _  Acrylic on Canvas _ 120cm by 160cm _  2013.",
  "Nelson Mandela _ Acrylic on Linen _ 101cm by 127cm _ 2011.",
  // "IMG_2125",
  "Oprah _ Acrylic on Canvas _ 80cm by 100cm _  2013.",
  "Michael Essien _ 2013 _ Acrylic on Canvas _ 80cm by 100cm",
  "This is Who I Am _ 2012 _ Acrylic on Canvas _ 112cm by 140cm.",
  "Shulammite _ Acrylic on Canvas _ 80cm by 100cm _ 2010.",
];

const Others = () => {
  const breakpointColumnsObj = {
    default: 4,
    900: 3,
    700: 2,
    500: 1,
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
      <div className="px-10 py-10">
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
                  src={`/Others/${item}.jpg`}
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
          imageUrl={`/Others/${selectedImage}.jpg`}
          onClose={closeModal}
        />
      )}
    </Layout>
  );
};
export default Others;
