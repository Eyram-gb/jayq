import React, { useState } from "react";
import Masonry from "react-masonry-css";
import ImageModal from "../../components/ImageModal";
import Layout from "../../components/Layout";

const imageNames = [
  "1 Daughters of Noah _ Photo by Oliver-Selim Boualam",
  "01_Jeremiah Quarshie_Gray_Gray Gallery_2022_Photo by Oliver-Selim Boualam 2",
  "2 Daughters of Noah _ Photo by Oliver-Selim Boualam",
  "3 Daughters of Noah _ Photo by Oliver-Selim Boualam",
  "4 Daughters of Noah _ Photo by Oliver-Selim Boualam",
  "04_Jeremiah Quarshie_Gray_Gray Gallery_2022_Photo by Oliver-Selim Boualam 2",
  "08_Jeremiah Quarshie_Gray_Gray Gallery_2022_Photo by Oliver-Selim Boualam",
];

const Doh = () => {
  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    600: 1,
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
      <div className="px-10 py-10 w-full mx-auto text-gray-500">
        <p className="text-justify indent-8">
          “<span className="font-semibold italic text-black">Daughters of Noah</span> is an assemblage of portraits of women
          on rectangle, square and round frames. The portraits include
          traditional paintings and archival photographs collaged by way of
          overlaying brightly coloured translucent paints. This exhibition blurs
          the boundaries of reality and fiction by reimagining roles played by
          women during colonial times as well as in the post-colonial epoch. The
          exhibition takes a radical approach against the grain of objectifying
          women&apos;s bodies by juxtaposing realistic renderings their facial
          expressions against smooth backdrops of vibrant hues. The realistic
          paintings in this exhibition challenge stereotypical perceptions of
          women&apos;s roles across the globe by using nuances such as clothing
          them in regal attires and reimagining them in positions of power.
          <br />
          <br />
          In this exhibition the artist draws his inspiration from both
          contemporary and historic women&apos;s lives and features portrayals
          of less known women and more familiar ones like Yaa Asantewaa the
          Warrior Queen Mother of Ejisu in the Ashanti kingdom. Daughters of
          Noah can be thought of as a form of appreciation and recognition of
          the struggles and triumphs of women. Quarshie incorporates texts in
          various African languages in his portraits to complexify the
          dichotomous understandings of performances by women in the colonial
          period and what constitutes their functions in the post-colonial
          epoch. He emphasizes the harmonies and tensions relating these two
          periods by putting into proximity women who lived across different
          periods on the time spectrum.”
        </p>
        <hr className="my-8" />
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
                  src={`/Exhibitions/Daughters of Noah/${item}.jpg`}
                  alt="artwork"
                  className=" w-full transition-all duration-150 group-hover:blur-[4px]"
                />
                <p className="inset-center w-full px-3 text-center font-extralight text-white transition-all duration-100 group-hover:visible">
                  Photo by Oliver-Selim Boualam
                </p>
              </div>
            );
          })}
        </Masonry>
      </div>
      {selectedImage && (
        <ImageModal
          imageUrl={`/Exhibitions/Daughters of Noah/${selectedImage}.jpg`}
          onClose={closeModal}
        />
      )}
    </Layout>
  );
};

export default Doh;
